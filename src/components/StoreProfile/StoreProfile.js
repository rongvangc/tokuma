import React, { Component } from "react";
import styles from './StoreProfile.module.css';
import StoreImage from "./StoreImage/StoreImage";
import BasicInfo from "./BasicInfo/BasicInfo";
import RedInvoice from "./RedInvoice/RedInvoice";
import Button from "../UI/Button/Button";

class StoreProfile extends Component {

  closedHandler = (event) => {
    event.preventDefault()
    this.props.closedPopup()
  }

  saveData = (event) => {
    event.preventDefault()
    this.props.saveChanged()
    this.props.closedPopup()
  }

  render() {
    return (
      <div className={styles.StoreProfile} >
        <h3>EDIT STORE PROFILE</h3>
        <hr/>
        <div className={styles.w40}>
          <StoreImage />
        </div>
        <div className={styles.w60}>
          <form onSubmit={this.saveData}>
            <BasicInfo formElementArray={this.props.basic} dataChanged={this.props.dataChanged} />
            <RedInvoice formElementArray={this.props.invoice} dataChanged={this.props.dataChanged} />
            <Button btnType="Green">Save</Button>
            <Button btnType="None" clicked={this.closedHandler}>Cancel</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default StoreProfile