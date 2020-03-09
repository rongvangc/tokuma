import React, { Component, Fragment } from "react";
import { connect } from 'react-redux' 

import styles from "./Store.module.css";
import checkedImg from '../assets/success.png';

import Button from "../components/UI/Button/Button";
import Modal from '../components/UI/Modal/Modal';
import StoreInfo from "../components/StoreInfo/StoreInfo";
import StoreProfile from "../components/StoreProfile/StoreProfile";
import * as actions from '../store/actions'

import withErrorHandler from '../withErrorHandler'
import axios from '../axios-store'
import Spinner from "../components/UI/Spinner/Spinner";
import Check from "../components/UI/Check/Check";


export class Store extends Component {

  componentDidMount() {
    this.props.onFetchData()  
  }

  render() {
    let modal = null;
    let storeInfo = <Spinner />;
    let popupSuccess = null

    if(this.props.store.isSuccess) {
      console.log('thành công');
      popupSuccess = <Check show><img className={styles.CheckIcon} src={checkedImg} alt=""/></Check>
    }

    if (this.props.store && this.props.store.redInvoice) {
      modal = <Modal 
      show={this.props.store.edit} 
      closedModal={this.props.onClosedModal}
    >
      <StoreProfile 
        data={this.props.store}
        closedModal={this.props.onClosedModal}
        onSave={this.props.onSaveChanged}
        onSaveData={this.props.onSaveDataChanged}
        onHandleUpload={this.handleUpload}
      />
    </Modal>
      storeInfo = (
      <Fragment>
        <img src={this.props.store.logoUrl} alt="" />
        <StoreInfo data={this.props.store} />
      </Fragment>
      )
    }

    return (
      <Fragment>
        {popupSuccess}
        {modal}
        <div className={styles.Store}>
          {storeInfo}
          <Button 
            btnType="Gray" 
            clicked={this.props.onEditChanged}
          >
            Edit Profile
          </Button>
        </div>
      </Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    store: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditChanged: () => dispatch(actions.editForm()),
    onClosedModal: () => dispatch(actions.closeModal()),
    onSaveChanged: (formData) => dispatch(actions.saveFormSuccess(formData)),
    onSaveDataChanged: (formDataUpload) => dispatch(actions.saveFormData(formDataUpload)),
    onFetchData: () => dispatch(actions.fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Store, axios));
