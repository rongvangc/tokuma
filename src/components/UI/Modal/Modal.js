import React, { Fragment } from 'react';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/BackDrop';

const Modal = (props) => (
  <Fragment>
    <Backdrop 
      show={props.show}
      clicked={props.closedModal}
    />
    <div className={styles.Modal} style={{
      opacity: props.show ? '1' : '0',
      transform: props.show ? 'translateY(0)' : 'translateY(-100%)'
    }}>
      {props.children}
    </div> 
  </Fragment>
)

export default Modal