from unicodedata import name
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Person

from .serializers import PersonSerializer
# Create your views here.


@api_view(['GET'])
def get_person_data(request):
    serializer = PersonSerializer(Person.objects.all(), many=True)
    return Response(serializer.data)
    