import React from 'react';
import styles from './Preview.module.css'

const Preview = (props) => (
  <div className={styles.Preview} onClick={props.click} style={{
    opacity: props.show ? '1' : '0',
    transform: props.show ? 'translateY(0)' : 'translateY(-100%)'
  }}>
    {props.children}
  </div> 
)

export default Preview