from django.urls import path

from .views import HomeListView, TechnologyListView, AiListView, FoodListView

urlpatterns = [
    path("", HomeListView.as_view(), name="home"),
    path("technology/", TechnologyListView.as_view(), name="technology"),
    path("ai/", AiListView.as_view(), name="ai"),
    path("food/", FoodListView.as_view(), name="food"),  # noqa: F405
]
