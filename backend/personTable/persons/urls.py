from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('personTable', views.PersonView)

urlpatterns = [
    path('', include(router.urls)),
]
