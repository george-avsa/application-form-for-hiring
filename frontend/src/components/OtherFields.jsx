import React, {useEffect, useState} from 'react'
import Documents from './Documents'
import Button from './UI/checkbox/Button/Button'
import Checkbox from './UI/checkbox/Checkbox'
import DateInput from './UI/input/DateInput'
import Input from './UI/input/Input'
import PhoneInput from './UI/input/PhoneInput'
import TimeInput from './UI/input/TimeInput'
import Modal from './UI/Modal/Modal'
import Radio from './UI/radio/Radio'
import MiniTitle from './UI/texts/miniTitle'
import Textarea from './UI/texts/Textarea'

export default function OtherFields(props) {

  
  const [graficValue, setGraficValue] = useState('')
  const [smenaValue, setSmenaValue] = useState('')
  const [workHoursValue, setWorkHoursValue] = useState('8')

  const [auchanValue, setAuchanValue] = useState('Ашан')
  const [metroValue, setMetroValue] = useState('Метро')
  const [atakValue, setAtakValue] = useState('Атак')


  useEffect(() => {
    if (graficValue && workHoursValue) {
      if (graficValue == 'days5') {
        console.log('Ашан - ' + ((185 * parseInt(workHoursValue)) * 5))
        setAuchanValue('Ашан - ' + ((185 * parseInt(workHoursValue)) * 5))
        setMetroValue('Метро - ' + ((190 * parseInt(workHoursValue)) * 5))
        setAtakValue('Атак - ' + ((175 * parseInt(workHoursValue)) * 5))
      } else if (graficValue == 'days6') {
        setAuchanValue('Ашан - ' + ((185 * parseInt(workHoursValue)) * 6))
        setMetroValue('Метро - ' + ((190 * parseInt(workHoursValue)) * 6))
        setAtakValue('Атак - ' + ((175 * parseInt(workHoursValue)) * 6))
      }
    }
  }, [graficValue, workHoursValue])

  const radiosShedule = [
    {id: 'days5', value: '5/2', name: "shedule"},
    {id: 'days6', value: '6/1', name: "shedule"}
  ]

  const radiosSmena = [
    {id: 'night', value: 'Ночной', name: "smena"},
    {id: 'day', value: 'Дневной', name: "smena"}
  ]

  
  const [passportValue, setPassportValue] = useState(null)
  const [snilsValue, setSnilsValue] = useState(null)
  const [medValue, setMedValue] = useState(null)
  const [migration, setMigrationValue] = useState(null)
  const [registrationValue, setRegistrationValue] = useState(null)
  const [printValue, setPrintValue] = useState(null)
  const [patentValue, setPatentValue] = useState(null)
  
  let documents = {
    passport: {value: passportValue, state: setPassportValue},
    snils: {value: snilsValue, state: setSnilsValue},
    med: {value: medValue, state: setMedValue},
    migration: {value: migration, state: setMigrationValue},
    registration: {value: registrationValue, state: setRegistrationValue},
    print: {value: printValue, state: setPrintValue},
    patent: {value: patentValue, state: setPatentValue},
  }

  const [dateValue, setDataValue] = useState('')
  const [timeValue, setTimeValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  
  const [workPlaceValue, setWorkPlaceValue] = useState('')
  const [commentValue, setCommentValue] = useState('')


  async function setRequest(method, url, csrftoken, params = null){
    if (method == 'POST') {
        return fetch(url, {
            method: method,
            credentials: 'same-origin',
            body: JSON.stringify(params),
            headers: {'X-CSRFToken': csrftoken},
            mode: 'same-origin' 
        }).then(response => {
          if (response.ok) {
            return response.json();
          }
          alert("Что-то пошло не так! Проверь, что данные загрузились в базу")
        }).then(data => {
          alert("Данные загружены в базу! Советую это проверить")
        })
    }
}

  function postData(e) {
    e.preventDefault();
    const dataToPost = {
      name: props.mainFields.name,
      lastName: props.mainFields.lastName,
      nationality: props.mainFields.nationality,
      position: props.mainFields.position,
      age: props.mainFields.age,
      passport: passportValue,
      snils: snilsValue,
      med: medValue,
      migration: migration,
      registration: registrationValue,
      print: printValue,
      patent: patentValue,
      workPlace: workPlaceValue,
      workDays: graficValue,
      date: dateValue,
      time: timeValue,
      phone: phoneValue,
      comment: commentValue
    }
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    setRequest("POST", "/create", csrftoken, dataToPost)
  }

  return (
    <div>
        <Documents nationality={props.nationality} documents={documents} />
        <Textarea placeholder="Место работы" value={workPlaceValue} state={setWorkPlaceValue}/>
        <Radio radios={radiosShedule} title="График" stateFunc={setGraficValue} />
        <Radio radios={radiosSmena} title="Смена" stateFunc={setSmenaValue} />
        <Input placeholder="Длительность смены" style={{marginTop: '20px'}} value={workHoursValue} state={setWorkHoursValue} />
        <Input placeholder={auchanValue} disabled style={{background: '#FFD6D6'}} />
        <Input placeholder={metroValue} disabled style={{background: '#D6EEFF'}} />
        <Input placeholder={atakValue} disabled style={{background: '#FFD6F6'}} />
        <MiniTitle style={{marginBottom: '20px'}}>> Рассказать про обязанности</MiniTitle>
        <DateInput value={dateValue} state={setDataValue} placeholder="Дата собеседования" />
        <TimeInput value={timeValue} state={setTimeValue} />
        <PhoneInput value={phoneValue} state={setPhoneValue} />
        <MiniTitle style={{marginBottom: '20px'}}>> На собеседование возьмите все документы </MiniTitle>
        <Textarea placeholder="Комментарий" value={commentValue} state={setCommentValue} style={{marginTop: '0px'}} />
        <Button onClick={postData}>Создать</Button>
    </div>
  )
}
