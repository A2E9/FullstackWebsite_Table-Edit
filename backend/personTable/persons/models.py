from asyncio.windows_events import NULL
from random import choices
from tokenize import blank_re
from django.db import models

# Create your models here.

ANREDE_CHOICES = (
    ('Herr', 'Herr'),
    ('Frau', 'Frau')
)
# m/w/d/n
GESCHLECHT_CHOICES = (
    ('m', 'männlich'),
    ('w', 'weiblich'),
    ('d', 'diverse'),
    ('u', 'unbekannt')
)

FAMIELIENTAND_CHOICES = (
    ('ledig', 'ledig'),
    ('verheiratet', 'verheiratet'),
    ('geschieden', 'geschieden')
)


class Person(models.Model):
    #anrede,name, vorname, geschlecht, nationalitaet, strasse, plz, ort, geburtsdatum, abteilung, familienstand, gehalt, iban, steuerklasse
    anrede = models.CharField(max_length=4, null=True,
                              choices=ANREDE_CHOICES)  # , default=NULL
    name = models.CharField(max_length=50)
    vorname = models.CharField(max_length=50)
    geschlecht = models.CharField(
        max_length=1, choices=GESCHLECHT_CHOICES)  # m/w/d/n
    nationalitaet = models.CharField(max_length=30, null=True)  # can NULL
    strasse = models.CharField(max_length=100)
    plz = models.CharField(max_length=5)
    ort = models.CharField(max_length=50)
    # geburtsdatum DD/MM/YYYY   input_formats=DATE_INPUT_FORMATS
    geburtsdatum = models.DateField()
    abteilung = models.CharField(max_length=50, null=True)  # can NULL
    familienstand = models.CharField(
        max_length=11, choices=FAMIELIENTAND_CHOICES)
    gehalt = models.DecimalField(max_digits=10, decimal_places=2)  # 
    iban = models.CharField(max_length=34)
    steuerklasse = models.IntegerField()  # 1-6
    
   
