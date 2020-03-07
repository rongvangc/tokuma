import React from 'react';
import styles from './Check.module.css'

const Check = (props) => (
  <div className={styles.Check} style={{
    opacity: props.show ? '1' : '0',
    transform: props.show ? 'translateY(0)' : 'translateY(-100%)'
  }}>
    {props.children}
  </div> 
)

export default Check