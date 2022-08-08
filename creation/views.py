from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import Client
import json
from datetime import datetime
from django.shortcuts import get_list_or_404
import csv

def main(request):
    template = loader.get_template('index.html')
    rendered_template =  HttpResponse(template.render({}, request))
    return rendered_template

def create(request):
    if request.method == 'POST':
        data_from_post = json.load(request)
        data = {
            'my_data':data_from_post,
        }
        date_list = data['my_data']['date'].split('.')
        if len(date_list) != 1:
            print(date_list)
            date = date_list[2]+"-"+date_list[1]+"-"+date_list[0]
        else:
            date = ''
        for key, value in data['my_data'].items():
            print(value)
            if value == NULL:
                pass
        new_client = Client.objects.create(
            name = data['my_data']['name'],
            last_name = data['my_data']['lastName'],
            nationality = data['my_data']['nationality'],
            age = int(data['my_data']['age']),
            postion = data['my_data']['position'],
            passport = data['my_data']['passport'],
            snils = data['my_data']['snils'],
            medkniga = data['my_data']['med'],
            migration = data['my_data']['migration'],
            registration = data['my_data']['registration'],
            print = data['my_data']['print'],
            patent = data['my_data']['patent'],
            work_place = data['my_data']['workPlace'],
            working_days = data['my_data']['workDays'],
            meeting_date = date,
            meeting_time = data['my_data']['time'],
            phone = data['my_data']['phone'],
            comment = data['my_data']['comment'],
        )
        return JsonResponse(data)



def get_file(request):
    if request.method == 'POST':
        data_from_post = json.load(request)
        data = {
            'my_data':data_from_post,
        }
        date_decoded = data['my_data']['dateFileValue'].split('.')
        # print(type(date_decoded))
        if len(date_decoded) != 1:
            date = date_decoded[2]+"-"+date_decoded[1]+"-"+date_decoded[0]
        else:
            date = ''
        date_formated = datetime.strptime(date, '%Y-%m-%d')
        kek = get_list_or_404(Client, creation_date=date_formated)
        rows = [
            ['Имя',
            'Фамилия',
            'Гражданство',
            'Возраст',
            'Позиция',
            'Паспорт',
            'СНИЛС',
            'Медкнижка',
            'Миграционная карта',
            'Регистрация',
            'Отпечатки',
            'Патент',
            'Место работы',
            'Рабочие часы',
            'Дата собеседования',
            'Время собеседования',
            'Номер WhatsApp',
            'Комментарии']
        ]
        headers = []
        if len(kek) > 0:
            for i in kek:
                print(i.name)
                row = [
                    i.name,
                    i.last_name,
                    i.nationality,
                    i.age,
                    i.postion,
                    i.passport,
                    i.snils,
                    i.medkniga,
                    i.migration,
                    i.registration,
                    i.print,
                    i.patent,
                    i.work_place,
                    i.working_days,
                    date,
                    i.meeting_time,
                    i.phone,
                    i.comment,
                ]
                rows.append(row)
        
        file_name = str(date_formated)[:10] + '.csv'
        print(file_name)
        with open('../static/files/'+file_name, 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerows(rows)
        return JsonResponse({'file_name': file_name})