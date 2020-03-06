import React from 'react';
import styles from './Toaster.module.css'

const Toaster = (props) => (

  <div className={styles.Toaster} style={{
    opacity: props.show ? '1' : '0',
    transform: props.show ? 'translateY(0)' : 'translateY(-100%)'
  }}>
    {props.children}
  </div> 
)

export default Toaster