import React, { Component } from "react";
import styles from './StoreProfile.module.css';
import StoreImage from "./StoreImage/StoreImage";
import FormInfo from "./FormInfo/FormInfo";

class StoreProfile extends Component {

  render() {
    return (
      <div className={styles.StoreProfile} >
        <h3>EDIT STORE PROFILE</h3>
        <hr/>
        <div className={styles.w40}>
          <StoreImage />
        </div>
        <div className={styles.w60}>
          <FormInfo 
            data={this.props.data} 
            closedPopup={this.props.closedPopup}
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default StoreProfile