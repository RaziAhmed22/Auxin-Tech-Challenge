import React from 'react'
import './style.css'

export const InputField = ({legend, type, placeholder, onChange, name}) => {
  return (
    <div className='input-field'>
        <legend>{legend}</legend>
        <input name={name} onChange={(e)=>onChange(e)} type={type} placeholder={placeholder}/>
    </div>
  )
}
