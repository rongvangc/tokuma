import React from "react";
import styles from './Input.module.css'

const Input = (props) => {

  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = <input type={props.type} placeholder={props.label} value={props.value} />
      break;
    case "select":
      inputElement = (
        <select>
          {props.option.map(opt => (
            <option key={opt.value}>{opt.displayValue}</option>
          ))}
        </select>
      )
      break
    default: 
      inputElement = (
        <input type={props.type} placeholder={props.label} value={props.value} />
      )
  }

  return (
    <div className={[styles.Input ,styles[props.size]].join(' ')} >
      <label>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input