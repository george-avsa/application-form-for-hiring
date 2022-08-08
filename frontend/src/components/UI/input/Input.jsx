import React from 'react'
import cl from './Input.module.css'

export default function Input({state, ...props}) {

  
  function raiseError() {
    const classes = [cl.input]
    if (props.err) {
      classes.push(cl.error)
    }
    return classes
  }

  function changeListener(e) {
    state(e.target.value)
    // raiseError()
  }

  return (
    <input {...props} className={raiseError().join(' ')} onChange={changeListener} />
  )
}
