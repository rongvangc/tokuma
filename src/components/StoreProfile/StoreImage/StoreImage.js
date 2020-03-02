import React from 'react';
import styles from './StoreImage.module.css'
import Button from '../../UI/Button/Button';
import Logo from '../../../assets/logo.jpg'

const StoreImage = (props) => (
  <div className={styles.StoreImage}>
    <h4>STORE IMAGE</h4>
    <img src={Logo} alt="" className={styles.StoreImage}/>
    <Button btnType="Gray" btnWidth="Width50">Upload Image</Button>
    <Button btnType="None" btnWidth="Width50">Remove</Button>
  </div>
)

export default StoreImage