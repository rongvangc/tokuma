import React from 'react';
import styles from './Button.module.css'

const Button = (props) => (
  <button
    className={ [styles.Button, styles[props.btnType], styles[props.btnWidth]].join(' ') }
    onClick={props.clicked}
    onSubmit={props.onSubmit}
    disabled={props.disabled}
    onChange={props.changed}
  >
    {props.children}
  </button>
)

export default Button