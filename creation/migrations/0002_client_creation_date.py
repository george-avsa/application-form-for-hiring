# Generated by Django 4.0.6 on 2022-08-07 10:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('creation', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='creation_date',
            field=models.DateField(default=datetime.date(2022, 8, 7)),
        ),
    ]
