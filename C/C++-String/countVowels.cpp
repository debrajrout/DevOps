//counting the number of vowels,consonents and whitespaces

#include<iostream>
#include<string>
using namespace std;

int main()
{
    string str="Hemant";
    int noVowel=0;
    int noConsonent=0;
    int wspace=0;
    for(int i=0;i<str.length();i++)
    {
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
        {
            noVowel++;
        }
        else if(str[i]==' ')
        {
            wspace++;
        }
        else{
            noConsonent++;
        }
    }
    cout<<noVowel<<endl;
    cout<<noConsonent<<endl;
    cout<<wspace<<endl;
}