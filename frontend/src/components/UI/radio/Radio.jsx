import React from 'react'
import MiniTitle from '../texts/miniTitle'
import cl from './Radio.module.css'

export default function Radio(props) {
  
  function setRadio(e) {
    props.stateFunc(e.target.id)
  }

  return (
    <div>
        <MiniTitle>{props.title}</MiniTitle>
        {props.radios.map((radio, index) => 
          <div>
            <input className={cl.radio} onChange={setRadio} name={radio.name} type="radio" id={radio.id} value={radio.name} />
            <label htmlFor={radio.id}>{radio.value}</label>
          </div>
        )}
        {/* <input className={cl.radio} name="patent" type="radio" id="oblast" value="green" />
        <label htmlFor="oblast">МО</label> */}
    </div>
  )
}
