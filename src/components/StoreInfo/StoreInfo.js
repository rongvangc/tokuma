import React from 'react';
import styles from './StoreInfo.module.css';

const StoreInfo = (props) => (
  <div className={styles.StoreInfo}>
    <h4>STORE INFO.</h4>
    <ul>
      <li>
        <p>Name :</p>
        <span>{props.data.name}</span>
      </li>
      <li>
        <p>Address :</p>
        <span>{props.data.address}</span>
      </li>
      <li>
        <p>Phone # :</p>
        <span>{props.data.phone}</span>
      </li>
    </ul>

    <h4>RED INVOICE INFO</h4>
    <ul>
      <li>
        <p>Company Name :</p>
        <span>{props.data.redInvoice.name}</span>
      </li>
      <li>
        <p>Company Address :</p>
        <span>{props.data.redInvoice.address}</span>
      </li>
      <li>
        <p>MST :</p>
        <span>{props.data.redInvoice.taxCode}</span>
      </li>
    </ul>
  </div>
)

export default StoreInfo