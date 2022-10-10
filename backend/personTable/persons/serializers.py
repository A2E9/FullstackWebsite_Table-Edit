from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
       # fields = ['anrede', 'name', 'vorname', 'geschlecht', 'nationalitaet', 'strasse', 'plz',
        #          'ort', 'geburtsdatum', 'abteilung', 'familienstand', 'gehalt', 'iban', 'steuerklasse']
