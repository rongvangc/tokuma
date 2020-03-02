import React from 'react';
import styles from './FormInfo.module.css'
import Input from '../../UI/Input/Input';

const FormInfo = (props) => (

  <form onSubmit="">
    <div className={styles.FormInfo}>
      <h4>BASIC INFO</h4>
      <Input elementType="text" label="Store Name" value={props.data.storeName.value} />
      <Input elementType="text" label="Store Address" value={props.data.storeAddress.value} size="w50" />
      <Input elementType="select" label="" option={props.data.storeDistrict.elementConfig.option} value={props.data.storeDistrict.value} size="w25" />
      <Input elementType="select" label="" option={props.data.storeCity.elementConfig.option} value={props.data.storeCity.value} size="w25" />
      <Input elementType="text" label="Phone #" value={props.data.storeAddress.value} />

      <h4>RED INVOICE INFO</h4>
      <Input elementType="text" label="Company Name" value={props.data.companyName.value} />
      <Input elementType="text" label="Company Address" value={props.data.companyAddress.value} size="w50" />
      <Input elementType="select" label="" option={props.data.companyDistrict.elementConfig.option} value={props.data.companyDistrict.value} size="w25" />
      <Input elementType="select" label="" option={props.data.companyDistrict.elementConfig.option} value={props.data.companyCity.value} size="w25" />
      <Input elementType="text" label="MST" value={props.data.companyMst.value} />
    </div>
  </form>
)

export default FormInfo