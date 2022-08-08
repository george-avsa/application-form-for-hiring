import React from 'react'
import cl from './Button.module.css'

export default function Button({onClick, ...props}) {
    return (
    <button className={cl.button} onClick={onClick} {...props}>{props.children}</button>
  )
}
