import React, { Component } from "react";
import styles from "./FormInfo.module.css";
import Button from "../../UI/Button/Button";

class FormInfo extends Component {
  state = {
    id: "",
    logoUrl: "",
    name: "",
    address: "",
    district: "",
    city: "",
    phone: "",
    redInvoice: {
      name: "",
      address: "",
      district: "",
      city: "",
      taxCode: ""
    },
    edit: false
  };

  handleChangeData = name => e => {
    // const {name , value} = e.target
    e.preventDefault();

    this.setState({ [name]: e.target.value }, () => console.log(this.state));
  };

  onSave = e => {
    e.preventDefault();
    this.props.handleSubmit({...this.state});
  };

  render() {
    return (
      <form onSubmit={this.onSave} noValidate>
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
              onChange={this.handleChangeData("name")}
            />
          </div>

          <div className={[styles.Input, styles.w50].join(" ")}>
            <label htmlFor="email">Store Address</label>
            <input
              className=""
              placeholder="Store Address"
              type="text"
              name="address"
              noValidate
              onChange={this.handleChangeData("address")}
            />
          </div>

          <div className={[styles.Input, styles.w25].join(" ")}>
            <select
              className=""
              type="select"
              name="district"
              noValidate
              // value={this.props.data.district}
              onChange={this.handleChangeData("district")}
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
              // value={this.props.data.city}
              onChange={this.handleChangeData("city")}
            >
              <option value="hn">Hà Nội</option>
              <option value="hcm">HCM</option>
            </select>
          </div>

          <div className={styles.Input}>
            <label htmlFor="phone">Phone #</label>
            <input
              className=""
              placeholder="Phone #"
              name="phone"
              type="text"
              noValidate
              onChange={this.handleChangeData("phone")}
            />
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
              onChange={this.handleChangeData}
            />
          </div>

          <div className={[styles.Input, styles.w50].join(" ")}>
            <label htmlFor="email">Company Address</label>
            <input
              className=""
              placeholder="Company Address"
              type="text"
              name="companyAddress"
              noValidate
              onChange={this.handleChangeData}
            />
          </div>

          <div className={[styles.Input, styles.w25].join(" ")}>
            <select
              className=""
              type="select"
              name="companyDistrict"
              // value={this.props.data.redInvoice.district}
              noValidate
              onChange={this.handleChangeData}
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
              // value={this.props.data.redInvoice.city}
              noValidate
              onChange={this.handleChangeData}
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
              noValidate
              onChange={this.handleChangeData}
            />
          </div>

          <Button btnType="Green">Save</Button>
          <Button btnType="None" clicked={this.props.data.closedPopup}>
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

export default FormInfo;
