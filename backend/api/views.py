from django.shortcuts import render
from rest_framework import viewsets
from .models import Profile, Project, Skill
from .serializers import ProfileSerializer, ProjectSerializer, SkillSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all().order_by("category", "name")
    serializer_class = SkillSerializer
# Create your views here.
