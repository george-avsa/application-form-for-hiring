from django.db import models
from datetime import date

class Client(models.Model):
    name = models.CharField(max_length=200, null=True)
    last_name = models.CharField(max_length=200, null=True)
    nationality = models.CharField(max_length=200, null=True)
    age = models.IntegerField(max_length=200, null=True)
    postion = models.CharField(max_length=200, null=True)
    passport = models.CharField(max_length=200, null=True)
    snils = models.CharField(max_length=200, null=True)
    medkniga = models.CharField(max_length=200, null=True)
    migration = models.CharField(max_length=200, null=True)
    registration = models.CharField(max_length=200, null=True)
    print = models.CharField(max_length=200, null=True)
    patent = models.CharField(max_length=200, null=True)
    work_place = models.TextField(max_length=400, null=True)
    working_days = models.CharField(max_length=200, null=True)
    meeting_date = models.CharField(max_length=200, null=True)
    meeting_time = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    comment = models.TextField(max_length=400, null=True)
    creation_date = models.DateField(default=date.today())
# age: "у"
# comment: ""
# date: ""
# lastName: "у"
# med: false
# migration: null
# name: "у"
# nationality: "bel"
# passport: true
# patent: null
# phone: ""
# position: "nothing"
# print: null
# registration: null
# snils: null
# time: ""