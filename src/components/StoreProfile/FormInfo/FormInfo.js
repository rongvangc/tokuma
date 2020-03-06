import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'

import styles from "./FormInfo.module.css";
import Button from "../../UI/Button/Button";

class FormInfo extends Component {

  _onSubmit = (e) => {
    e.preventDefault();
    this.props.onSave()
  }

  render() {
    let errorMessage = '';
    let errorClass = '';
    const regex = /^(?:\d{8}(?:\d{2}(?:\d{2})?)?|\(\+?\d{2,3}\)\s?(?:\d{4}[\s*.-]?\d{4}|\d{3}[\s*.-]?\d{3}|\d{2}([\s*.-]?)\d{2}\1\d{2}(?:\1\d{2})?))$/;

    const phoneRegex = RegExp(regex)

    if(!phoneRegex.test(this.props.data.phone)) {
      errorMessage = <span className={styles.ErrorMessage}>Please put correct phone number</span>;
      errorClass = styles.ErrorInput
    }
    
    return (
      <Fragment>
        <form onSubmit={this._onSubmit} noValidate>
          <div className={styles.FormInfo}>
            <h4>BASIC INFO</h4>

            <div className={styles.Input}>
              <label htmlFor="name">Store Name</label>
              <input
                className=""
                placeholder="Store Name"
                type="text"
                name="name"
                noValidate
                value={this.props.data.name}
                onChange={this.props.onHandleChangeData("name")}
              />
            </div>

            <div className={[styles.Input, styles.w50].join(" ")}>
              <label htmlFor="email">Store Address</label>
              <input
                className=""
                placeholder="Store Address"
                type="text"
                name="address"
                value={this.props.data.address}
                noValidate
                onChange={this.props.onHandleChangeData("address")}
              />
            </div>

            <div className={[styles.Input, styles.w25].join(" ")}>
              <select
                className=""
                type="select"
                name="district"
                noValidate
                value={this.props.data.district}
                onChange={this.props.onHandleChangeData("district")}
              >
                <option value="district-1">District 1</option>
                <option value="district-2">District 2</option>
                <option value="district-3">District 3</option>
              </select>
            </div>

            <div className={[styles.Input, styles.w25].join(" ")}>
              <select
                className=""
                type="select"
                name="city"
                noValidate
                value={this.props.data.city}
                onChange={this.props.onHandleChangeData("city")}
              >
                <option value="hn">Hà Nội</option>
                <option value="hcm">HCM</option>
              </select>
            </div>

            <div className={styles.Input}>
              <label htmlFor="phone">Phone #</label>
              <input
                className={errorClass}
                placeholder="Phone #"
                name="phone"
                type="text"
                noValidate
                value={this.props.data.phone}
                onChange={this.props.onHandleChangeData("phone")}
              />
              {errorMessage}
            </div>

            <h4>RED INVOICE INFO</h4>

            <div className={styles.Input}>
              <label htmlFor="name">Company Name</label>
              <input
                className=""
                placeholder="Company Name"
                type="text"
                name="companyName"
                noValidate
                value={this.props.data.redInvoice.name}
                onChange={this.props.onHandleChangeInvoice("name")}
              />
            </div>

            <div className={[styles.Input, styles.w50].join(" ")}>
              <label htmlFor="email">Company Address</label>
              <input
                className=""
                placeholder="Company Address"
                type="text"
                name="companyAddress"
                value={this.props.data.redInvoice.address}
                noValidate
                onChange={this.props.onHandleChangeInvoice("address")}
              />
            </div>

            <div className={[styles.Input, styles.w25].join(" ")}>
              <select
                className=""
                type="select"
                name="companyDistrict"
                value={this.props.data.redInvoice.district}
                noValidate
                onChange={this.props.onHandleChangeInvoice("district")}
              >
                <option value="district-1">District 1</option>
                <option value="district-2">District 2</option>
                <option value="district-3">District 3</option>
              </select>
            </div>

            <div className={[styles.Input, styles.w25].join(" ")}>
              <select
                className=""
                type="select"
                name="companyCity"
                value={this.props.data.redInvoice.city}
                noValidate
                onChange={this.props.onHandleChangeInvoice("city")}
              >
                <option value="hn">Hà Nội</option>
                <option value="hcm">HCM</option>
              </select>
            </div>

            <div className={styles.Input}>
              <label htmlFor="taxCode">MST</label>
              <input
                className=""
                placeholder="MST"
                name="companyTaxCode"
                type="text"
                value={this.props.data.redInvoice.taxCode}
                noValidate
                onChange={this.props.onHandleChangeInvoice("taxCode")}
              />
            </div>
            {errorMessage ? <Button btnType="Green" disabled >Save</Button> : <Button btnType="Green">Save</Button>}
          </div>
        </form>
        <Button btnType="None" clicked={this.props.onCancel}>
          Cancel
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(FormInfo);
