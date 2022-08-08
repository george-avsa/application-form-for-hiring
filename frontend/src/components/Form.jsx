import React, {useMemo, useState, useEffect} from 'react'
import OtherFields from './OtherFields'
import Input from './UI/input/Input'
import Select from './UI/select/Select'
import {Select_data} from './UI/select/Select_data'
import WarningText from './UI/texts/WarningText'


export default function Form() {
  
  const nationality = Select_data()
  const [detailedForm, setDetailedForm] = useState(false)

  const [position, setPosition] = useState([
    {value: "zal", placeholder: "Сотрудник торгового зала"}
])

  // necessary fields
  const [nameValue, setNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [nationalityValue, setNationalityValue] = useState('')
  const [positionValue, setPositionValue] = useState('')
  const [ageValue, setAgeValue] = useState('')

  // other fields
  let fieldsValues = {
    name: nameValue,
    lastName: lastNameValue,
    nationality: nationalityValue,
    position: positionValue,
    age: ageValue
  }

  const [ageError, setAgeError] = useState(false)
  const [positionError, setPositionError] = useState(false)

  const[cassirCondition1, setCassirCondition1] = useState(false)
  const[cassirCondition2, setCassirCondition2] = useState(false)


  
  useEffect(() => {
    if (nameValue && lastNameValue && nationalityValue && positionValue && ageValue) {
      setDetailedForm(true)
    } else {
      setDetailedForm(false)
    }
  }, [nameValue, lastNameValue, nationalityValue, positionValue, ageValue])
  
  useEffect(() => {
    if (nationalityValue == "rf") {
      setCassirCondition1(true)
      } else {
      setCassirCondition1(false)
    }
  }, [nationalityValue])
  
  useEffect(() => {
    if (Number(ageValue)) {
      if (parseInt(ageValue) < 50) {
        setCassirCondition2(true)
      } else {
        setCassirCondition2(false)
      }
    } else if (ageValue != '') {
      setAgeError(true)
    } else {
      setAgeError(false)
    }
  }, [ageValue])
  
  useEffect(() => {
    let getPosition = [{value: "", placeholder: ""}]
    if (cassirCondition1 && cassirCondition2) {
      getPosition = [{value: "zal", placeholder: "Сотрудник торгового зала"}, {value: "kassir", placeholder: "Кассир"}]
    } else if (!cassirCondition1 && cassirCondition2) {
      getPosition = [{value: "zal", placeholder: "Сотрудник торгового зала"}]
    } else if (cassirCondition1 && !cassirCondition2) {
      getPosition = [{value: "kassir", placeholder: "Кассир"}]
    } else {
      getPosition = [{value: "nothing", placeholder: "Не подходит"}]
    }
    return setPosition(getPosition)
  }, [cassirCondition1, cassirCondition2])


  return (
    <form className='formAll'>
      <Input placeholder="Имя" name="name" state={setNameValue} />
      <Input placeholder="Фамилия" name="last_name" state={setLastNameValue} />
      <Select defaultValue="Гражданство" options={nationality} name="nationality" state={setNationalityValue} value={nationalityValue} />
      <Input placeholder="Полных лет" name="age" state={setAgeValue} err={ageError} />
      <Select defaultValue="Желаемая должность" options={position} name="position" state={setPositionValue} value={positionValue} err={positionError} />
      {detailedForm
        ? <OtherFields nationality={nationalityValue} mainFields={fieldsValues} />
        : <WarningText>Сначала заполни все поля выше</WarningText>
      }
        
    </form>
  )
}
