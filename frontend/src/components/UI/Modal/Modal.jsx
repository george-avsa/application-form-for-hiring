import React from 'react'
import cl from './Modal.module.css'

export default function Modal(props) {

    let modalClasses = [cl.modalBody]
    function modalBackOnClick(e) {
        modalClasses.push(cl.active)
    }

  return (
    <div className={cl.modalBody}>
        <div className={cl.modalInner}>
            {props.children}
        </div>
    </div>
  )
}
