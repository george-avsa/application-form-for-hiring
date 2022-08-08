import React from 'react'
import Input from './Input'
import cl from './Input.module.css'
import InputMask from 'react-input-mask';

export default function DateInput(props) {
  
  function stateListener(e) {
    props.state(e.target.value)
  }
  
  return (
    <InputMask mask="99.99.9999" value={props.value} state={props.state} onChange={stateListener} placeholder={props.placeholder}>
      {(props) => <input className={cl.input} value={props.value}  placeholder={props.placeholder} />}
    </InputMask>
  )
}
