from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, ProjectViewSet, SkillViewSet

router = DefaultRouter()
router.register(r"profiles", ProfileViewSet)
router.register(r"projects", ProjectViewSet)
router.register(r"skills", SkillViewSet)

urlpatterns = router.urls
