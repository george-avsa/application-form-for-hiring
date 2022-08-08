from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('create', views.create, name='create'),
    path('getFile', views.get_file, name='create'),
]