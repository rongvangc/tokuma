import React, { Component } from "react";
import styles from './StoreProfile.module.css';
import StoreImage from "./StoreImage/StoreImage";
import Button from "../UI/Button/Button";
import FormInfo from "./FormInfo/FormInfo";

class StoreProfile extends Component {

  closedHandler = (event) => {
    event.preventDefault()
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
          <form onSubmit="">
            <FormInfo data={this.props.data} />
            <Button btnType="Green">Save</Button>
            <Button btnType="None" clicked={this.closedHandler}>Cancel</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default StoreProfile