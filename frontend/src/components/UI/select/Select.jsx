import React from 'react'
import cl from './Select.module.css'

export default function Select({state, ...props}) {
  function setSelectValue(e) {
    state(e.target.value)
  }

  function setClasses(e) {
    const classes = [cl.select]
    if (props.err) {
      classes.push(cl.error)
    }
    if (props.value) {
      classes.push(cl.selected)
    }
    return classes
  }

  return (
    <select className={setClasses().join(' ')} onChange={setSelectValue}>
        <option default={props.defaultValue} hidden>{props.defaultValue}</option>
        {props.options.map((option, index) => 
            <option value={option.value} key={index}>{option.placeholder}</option>
        )}
    </select>
  )
}
