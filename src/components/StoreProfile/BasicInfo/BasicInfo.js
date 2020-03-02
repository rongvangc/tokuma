import React from 'react';
import styles from './BasicInfo.module.css'
import Input from '../../UI/Input/Input';

const BasicInfo = (props) => (
  <div className={styles.BasicInfo}>
    <h4>BASIC INFO</h4>
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

export default BasicInfo