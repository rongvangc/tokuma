import React, { Component } from 'react';
import styles from './StoreImage.module.css'
import Button from '../../UI/Button/Button';

class StoreImage extends Component {

  // state = {
  //   imageUrl: this.props.img
  // }

  // handlePreview = (event) => {
  //   this.setState({imageUrl: this.props.img})
  // }

  // handleImg = (event) => {
  //   const image = event.target.files[0]

  //   const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    
  //   uploadTask.on('state_changed', 
  //   (snapShot) => {
  //     //takes a snap shot of the process as it is happening
  //     console.log(snapShot)
  //   }, 
  //   (error) => {
  //     //catches the errors
  //     console.log(error); 
  //   }, 
  //   () => {
  //     storage.ref('images').child(image.name).getDownloadURL().then(url => {
  //       this.setState({imageUrl: url})
  //     })
  //   })
  // }

  handleEdit = () => {
    const fileInput = document.getElementById('logoInput')
    fileInput.click()
  }

  render() {
    return (
      <div className={styles.StoreImage}>
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