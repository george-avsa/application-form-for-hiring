from django.contrib import admin

from .models import Client

class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'nationality', 'age', 'nationality', 'postion', 'passport', 'snils', 'medkniga', 'migration', 'registration', 'print', 'patent', 'work_place', 'working_days', 'meeting_date', 'meeting_time', 'phone', 'comment', 'creation_date')

admin.site.register(Client, ClientAdmin)