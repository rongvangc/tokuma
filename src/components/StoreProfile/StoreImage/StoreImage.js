import React, { Component } from 'react';

import styles from './StoreImage.module.css'
import Button from '../../UI/Button/Button';
import CloseIcon from '../../../assets/cancel.png'
import Preview from '../../UI/Preview/Preview';

class StoreImage extends Component {

  handleEdit = () => {
    const fileInput = document.getElementById('logoInput')
    fileInput.click()
  }

  render() {

    let preview = null;

    if(this.props.preview) {
      preview = <Preview 
                  show={this.props.preview}
                >
                  <h3>PREVIEW BOX<br></br><small>Wait a second, the image will change</small></h3>
                  <img className={styles.ClosePreview} src={CloseIcon} alt="" onClick={this.props.onClosePreview} />
                  <img className={styles.Preview} src={this.props.data} alt="" onClick={this.props.onClosePreview}  />
                </Preview>
    }

    return (
      <div className={styles.StoreImage}>
        {preview}
        <h4>STORE IMAGE</h4>
        <img src={this.props.data} alt="" className={styles.StoreImage} onClick={this.handleEdit}  />
        <input 
          type="file" 
          id="logoInput" 
          // accept="image/png, image/jpeg"
          changed={this.props.imageChange} 
          hidden
          onChange={(e) => this.props.onHandleUpload(e.target.files[0])}
        />
        <Button btnType="Gray" btnWidth="Width50" clicked={this.handleEdit} >Upload Image</Button>
        <Button btnType="None" btnWidth="Width50" clicked={this.props.onRemoveUpload} >Remove</Button>
      </div>
    )
  }
}

export default StoreImage