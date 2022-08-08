import React, {useState} from 'react'
import Button from './UI/checkbox/Button/Button'
import DateInput from './UI/input/DateInput'
import Link from './UI/link/Link'

export default function FileForm() {
  
    const [dateFileValue, setDateFileValue] = useState('')
    const [fileLink, setFileLink] = useState('')

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
              alert("Данных нету за этот день или что-то пошло не так((")
            }).then(data => {
              setFileLink(data['file_name'])
            })
        }
    }

    function postData(e) {
        e.preventDefault();
        console.log(dateFileValue)
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        setRequest("POST", "/getFile", csrftoken, {dateFileValue: dateFileValue})
    }

    return (
    <form className='fileForm'>
        <DateInput value={dateFileValue} state={setDateFileValue} placeholder="Дата для выгрузки"  /> 
        <Button onClick={postData}>Создать файл</Button>
        {fileLink &&
          <Link href={'/static/files/'+fileLink}  />
        }
    </form>
  )
}
