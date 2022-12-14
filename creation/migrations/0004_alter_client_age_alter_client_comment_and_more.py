# Generated by Django 4.0.6 on 2022-08-07 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('creation', '0003_alter_client_meeting_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='age',
            field=models.IntegerField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='comment',
            field=models.TextField(max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='last_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='medkniga',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='meeting_time',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='migration',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='nationality',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='passport',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='patent',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='phone',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='postion',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='print',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='registration',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='snils',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='work_place',
            field=models.TextField(max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='working_days',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
