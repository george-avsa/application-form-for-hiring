import React from 'react'
import cl from './Textarea.module.css'

export default function Textarea(props) {
  
  function changeListener(e) {
    props.state(e.target.value)
  }

  return (
    <textarea className={cl.textarea} onChange={changeListener} value={props.value} placeholder={props.placeholder}></textarea>
  )
}
