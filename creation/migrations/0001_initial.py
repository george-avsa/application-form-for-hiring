# Generated by Django 4.0.6 on 2022-08-07 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('age', models.IntegerField(max_length=200)),
                ('nationality', models.CharField(max_length=200)),
                ('postion', models.CharField(max_length=200)),
                ('passport', models.CharField(max_length=200)),
                ('snils', models.CharField(max_length=200)),
                ('medkniga', models.CharField(max_length=200)),
                ('migration', models.CharField(max_length=200)),
                ('registration', models.CharField(max_length=200)),
                ('print', models.CharField(max_length=200)),
                ('patent', models.CharField(max_length=200)),
                ('work_place', models.TextField(max_length=400)),
                ('working_days', models.CharField(max_length=200)),
                ('meeting_date', models.CharField(max_length=200)),
                ('meeting_time', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=200)),
                ('comment', models.TextField(max_length=400)),
            ],
        ),
    ]
