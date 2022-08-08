import React from 'react'
import cl from './WarningText.module.css'

export default function WarningText(props) {
  return (
    <h1 className={cl.warning}>{props.children}</h1>
  )
}
