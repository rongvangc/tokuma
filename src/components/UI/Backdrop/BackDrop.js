import React from 'react'

import styles from './BackDrop.module.css'

const Backdrop = (props) => (
  props.show 
  ? <div 
      className={styles.Backdrop} 
      onClick={props.clicked}
      style={{
        opacity: props.show ? '1' : '0',
        transform: props.show ? 'translateY(0)' : 'translateY(-100%)'
      }}
      ></div> 
  : null
)

export default Backdrop;