from django.utils import timezone
from django.db import models

# Create your models here.


class BlogPost(models.Model):
    class PostCategory(models.TextChoices):
        Food = "Food", "Food"
        Airtificial_intelligence = "Airtificial intelligence", "Ai"
        technology = "Technology", "tech"
        home = "Home", "Home"

    title = models.CharField(max_length=500)
    published_date = models.DateTimeField(default=timezone.now)
    body = models.TextField()
    blogType = models.CharField(
        choices=PostCategory.choices, max_length=100, default=PostCategory.home
    )
    picture = models.ImageField(upload_to="images")

    def __str__(self):
        return self.title
