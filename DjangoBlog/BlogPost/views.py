from django.views.generic import (
    ListView,
    DetailView,
    DeleteView,
    CreateView,
    UpdateView,
)

# from DjangoBlog.BlogPost.models import BlogPost

# Create your views here.

from .models import BlogPost


class HomeListView(ListView):
    model = BlogPost
    template_name = "home.html"
    context_object_name = 'blogPost'


class TechnologyListView(ListView):
    model = BlogPost
    template_name = "technology.html"


class AiListView(ListView):
    model = BlogPost
    template_name = "ai.html"
    context_object_name = 'AiPost'



class FoodListView(ListView):
    model = BlogPost
    template_name = "food.html"
