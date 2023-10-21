from django.views.generic import (
    ListView,
    DetailView,
    DeleteView,
    CreateView,
    UpdateView,
)

# Create your views here.

from .models import BlogPost
class HomeListView(ListView):
    model = BlogPost
    template_name = "home.html"
    context_object_name = 'blogPost'
    
    def get_queryset(self):
        allHomeList = super().get_queryset()
        return allHomeList.filter(blogType="Home")


class TechnologyListView(ListView):
    model = BlogPost
    template_name = "technology.html"
    context_object_name = 'technologyPost'
    
    def get_queryset(self):
        allTechnologyList = super().get_queryset()
        return allTechnologyList.filter(blogType="Technology")

class AiListView(ListView):
    model = BlogPost
    template_name = "ai.html"
    context_object_name = 'AiPost'

    def get_queryset(self):
        allAiList = super().get_queryset()
        return allAiList.filter(blogType="Airtificial intelligence")


class FoodListView(ListView):
    model = BlogPost
    template_name = "food.html"
    context_object_name = 'FoodPost'

    
    def get_queryset(self):
        allFoodList = super().get_queryset()
        return allFoodList.filter(blogType="Food")


