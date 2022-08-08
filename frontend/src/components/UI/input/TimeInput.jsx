import React from 'react'
import Input from './Input'
import cl from './Input.module.css'
import InputMask from 'react-input-mask';

export default function TimeInput(props) {
  
  function stateListener(e) {
    props.state(e.target.value)
  }
  
  return (
    <InputMask mask="99:99" value={props.value} state={props.state} onChange={stateListener}>
      {(props) => <input className={cl.input} value={props.value} placeholder="Время собеседования" />}
    </InputMask>
  )
}
