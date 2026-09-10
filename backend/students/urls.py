from django.urls import path
from .views import register_student, home

urlpatterns = [
    path("register/", register_student),
    path("/", home ),
]
