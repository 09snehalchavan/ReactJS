from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Student

# Create your views here.

def home(request):
    return HttpResponse("Home Page")

@csrf_exempt
def register_student(request):

    if request.method == "POST":

        data = json.loads(request.body)

        name = data.get("name")
        email = data.get("email")
        password = data.get("password")
        address = data.get("address")

        student = Student.objects.create(
            name=name,
            email=email,
            password=password,
            address=address
        )

        return JsonResponse({
            "message": "Student registered successfully",
            "id": student.id
        })

    return JsonResponse({
        "message": "Only POST method is allowed"
    })