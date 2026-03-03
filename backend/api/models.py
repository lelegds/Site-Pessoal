from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    photo_url = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    cv_url = models.URLField(blank=True)

    def __str__(self):
        return f"Profile: {self.user.username}"

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image_url = models.URLField(blank=True)
    repo_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=80, unique=True)
    category = models.CharField(max_length=80)
    level = models.IntegerField(default=0)

    def __str__(self):
        return self.name