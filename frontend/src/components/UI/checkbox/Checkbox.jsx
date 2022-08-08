import React from 'react'
import cl from './Checkbox.module.css'

export default function Checkbox(props) {

  function keklol(e) {
    props.stateFunc(e.target.checked)
    console.log(e.target.checked)
  }

  return (
    <div className="checkbox" key={props.index}>
        <input type="checkbox" className={cl.checkbox} id={props.id} name={props.name} checked={props.value} onChange={keklol} />
        <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}
