from flask import Flask, request, render_template
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import requests
from bs4 import BeautifulSoup
import re
import pandas as pd


app = Flask(__name__)

# Setup the model
tokenizer = AutoTokenizer.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")
model = AutoModelForSequenceClassification.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")

def sentiment_score(review):
    tokens = tokenizer.encode(review, return_tensors='pt')
    result = model(tokens)
    return int(torch.argmax(result.logits)) + 1

def get_reviews(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')
    regex = re.compile('.*comment.*')
    results = soup.find_all('p', {'class': regex})
    reviews = [result.text for result in results]
    return reviews

def get_top_10_comments(reviews):
    df = pd.DataFrame(reviews, columns=['review'])
    df['sentiment'] = df['review'].apply(lambda x: sentiment_score(x[:512]))
    top_10_comments = df.nlargest(10, 'sentiment')
    return top_10_comments

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        url = request.form['url']
        reviews = get_reviews(url)
        top_10_comments = get_top_10_comments(reviews)
        overall_sentiment = top_10_comments['sentiment'].mean()
        return render_template('result.html', sentiment=overall_sentiment, top_comments=top_10_comments.to_dict(orient='records'))
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
