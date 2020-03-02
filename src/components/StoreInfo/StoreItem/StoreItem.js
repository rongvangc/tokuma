import React from 'react';
import styles from './StoreItem.module.css'

const StoreItem = (props) => (
  <li className={styles.StoreItem}>
    <p>{props.name} :</p>
    <span>{props.value}</span>
  </li>
)

export default StoreItem