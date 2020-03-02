import React from 'react';
import styles from './StoreInfo.module.css';

const StoreInfo = (props) => (
  <div className={styles.StoreInfo}>
    <h4>STORE INFO.</h4>
    <ul>
      <li>
        <p>Name :</p>
        <span>{props.data.storeName.value}</span>
      </li>
      <li>
        <p>Address :</p>
        <span>{props.data.storeAddress.value}</span>
      </li>
      <li>
        <p>Phone # :</p>
        <span>{props.data.storePhone.value}</span>
      </li>
    </ul>

    <h4>RED INVOICE INFO</h4>
    <ul>
      <li>
        <p>Company Name :</p>
        <span>{props.data.companyName.value}</span>
      </li>
      <li>
        <p>Company Address :</p>
        <span>{props.data.companyAddress.value}</span>
      </li>
      <li>
        <p>MST :</p>
        <span>{props.data.companyMst.value}</span>
      </li>
    </ul>
  </div>
)

export default StoreInfo