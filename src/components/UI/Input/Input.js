import React from "react";
import styles from './Input.module.css'

const Input = (props) => {

  let inputElement = null;

  switch (props.elementType) {
    case "input":
      if(props.elementConfig.size === 'w50') {
        inputElement = (
          <div className={[styles.Input, props.elementConfig.size, styles.w50].join(' ')} >
            <label>{props.elementConfig.label}</label>
            <input 
              placeholder={props.elementConfig.placeholder} 
              onChange={props.changed}
            />
          </div>
        )
      } else {
        inputElement = (
          <div className={[styles.Input, props.elementConfig.size].join(' ')} >
            <label>{props.elementConfig.label}</label>
            <input 
              placeholder={props.elementConfig.placeholder} 
              onChange={props.changed}
            />
          </div>
        )
      }
      break;
    case "select":
      if(props.elementConfig.size === 'w25') {
        inputElement = (
          <div className={[styles.Input, props.size, styles.w25].join(' ')} >
            <label>{props.elementConfig.label}</label>
            <select>
              {props.elementConfig.option.map(opt => (
                <option key={opt.value} value={opt.value}> {opt.displayValue}</option>
              ))}
            </select>
          </div>
        )
      } else {
        inputElement = (
          <div className={[styles.Input, props.elementConfig.size].join(' ')} >
            <label>{props.elementConfig.label}</label>
            <select>
              {props.elementConfig.option.map(opt => (
                <option key={opt.value} value={opt.value}> {opt.displayValue}</option>
              ))}
            </select>
          </div>
        )
      }
      break
    default: 
      return inputElement
  }
  return inputElement
}

export default Input