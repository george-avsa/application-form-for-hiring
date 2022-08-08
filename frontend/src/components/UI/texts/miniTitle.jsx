import React from 'react'
import cl from './miniTitle.module.css'

export default function MiniTitle(props) {
  return (
    <p className={cl.miniTitle} {...props}>{props.children}</p>
  )
}
