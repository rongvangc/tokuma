import React from 'react';
import styles from './RedInvoice.module.css';
import Input from '../../UI/Input/Input';

const RedInvoice = (props) => (
  <div className={styles.RedInvoice}>
    <h4>RED INVOICE</h4>
    {props.formElementArray.map(formElement => (
      <Input 
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={(event) => props.dataChanged(event, formElement.id)}
      />
    ))}
  </div>
)

export default RedInvoice