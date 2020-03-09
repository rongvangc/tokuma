import React, { Component } from "react";

import { connect } from 'react-redux'

import styles from './StoreProfile.module.css';
import StoreImage from "./StoreImage/StoreImage";
import FormInfo from "./FormInfo/FormInfo";
import { storage } from '../../firebase/firebase';
import * as actions from '../../store/actions';

import withErrorHandler from '../../withErrorHandler'
import axios from '../../axios-store'

class StoreProfile extends Component {

  state = {
    id: this.props.store.id,
    logoUrl: this.props.store.logoUrl,
    name: this.props.store.name,
    address: this.props.store.address,
    district: this.props.store.district,
    city: this.props.store.city,
    phone: this.props.store.phone,
    redInvoice: {
      name: this.props.store.redInvoice.name,
      address: this.props.store.redInvoice.address,
      district: this.props.store.redInvoice.district,
      city: this.props.store.redInvoice.city,
      taxCode: this.props.store.redInvoice.taxCode
    },
  };

  handleChangeData = name => e => {
    e.preventDefault();

    this.setState(
      {
        [name]: e.target.value,
      },
      () => console.log(this.state)
    );
  };

  handleChangeInvoice = name => e => {
    e.preventDefault();

    this.setState(
      {
        redInvoice: {
          ...this.state.redInvoice,
          [name]: e.target.value
        }
      },
      () => console.log(this.state)
    );
  };

  handleImg = (imageFile) => {
    const image = imageFile

    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot);
      // this.props.onUploadImage();
    }, 
    (error) => {
      //catches the errors
      // this.props.onUploadFail(error)
    }, 
    () => {
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        this.setState({logoUrl: url})
      })
    })

    this.props.onShowPreview()
  }

  _onSave = () => {
    this.props.onSaveData(this.state)
  }

  _onCancel = () => {
    this.setState({...this.props.store})
    this.props.closedModal()
  }

  removeImg = () => {
    this.setState({...this.props.store})
  }

  render() {
    return (
      <div className={styles.StoreProfile} >
        <h3>EDIT STORE PROFILE</h3>
        <hr/>
        <div className={styles.w40}>
          <StoreImage 
            data={this.state.logoUrl}
            preview={this.props.store.isPreview}
            onHandleUpload={this.handleImg}
            onRemoveUpload={this.removeImg}
            onClosePreview={this.props.onClosePreview}
          />
        </div>
        <div className={styles.w60}>
          <FormInfo 
            data={this.state} 
            dataChange={this.props.onDataChange}
            invoiceChange={this.props.onInvoiceChange}
            onSave={this._onSave}
            onCancel={this._onCancel}
            onHandleChangeInvoice={this.handleChangeInvoice}
            onHandleChangeData={this.handleChangeData}
            onShowError={this.props.onShowError}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowError: (error) => dispatch(actions.saveFormFail(error)),
    onShowPreview: () => dispatch(actions.preview()),
    onClosePreview: () => dispatch(actions.closePreview())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(StoreProfile, axios))