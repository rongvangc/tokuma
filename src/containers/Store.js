import React, { Component, Fragment } from "react";
import Logo from "../assets/logo.jpg";
import Button from "../components/UI/Button/Button";
import styles from "./Store.module.css";
import Modal from '../components/UI/Modal/Modal';
import StoreInfo from "../components/StoreInfo/StoreInfo";
import StoreProfile from "../components/StoreProfile/StoreProfile";

class Store extends Component {

  state = {
    id: 'z_12',
    logoUrl: Logo,
    name: 'K.O.I Thé',
    address: '521 Hồ Tùng Mậu, D1, HCM',
    district: [
      {value: 'district_1', displayValue: 'District 1'},
      {value: 'district_2', displayValue: 'District 2'},
      {value: 'district_3', displayValue: 'District 3'},
    ],
    city: [
      {value: 'hcm', displayValue: 'Hồ Chí Minh'},
      {value: 'hn', displayValue: 'Hà Nội'}
    ],
    phone: '(338) 886-9944',
    redInvoice: {
      name: 'K.O.I Thé International Company',
      address: '9682 Wakehurst Avenue Arlington Height, IL 60004',
      district: [
        {value: 'district_1', displayValue: 'District 1'},
        {value: 'district_2', displayValue: 'District 2'},
        {value: 'district_3', displayValue: 'District 3'},
      ],
      city: [
        {value: 'hcm', displayValue: 'Hồ Chí Minh'},
        {value: 'hn', displayValue: 'Hà Nội'}
      ],
      taxCode: 'P77744944',
    },
    edit: false,
  }

  editHandler = () => {
    this.setState({edit: true})
  }

  closedModal = () => {
    this.setState({edit: false})
  }

  // handleChange = name => (e) => {
  //   e.preventDefault()
    
  //   this.setState({ [name]: e.target.value }, () => console.log(this.state))

  //   console.log("name", name);
  //   console.log("value", e.target.value );
  // }

  handleChange =  e => {
    e.preventDefault();
    const { name, value } = e.target;

    console.log("name", name);
    console.log("value", value );
    
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(`
      --SUBMITTING--
      name: ${this.state.name}
      address: ${this.state.address}
      district: ${this.state.district}
      phone: ${this.state.phone}
    `);
  }

  render() {

    return (
      <Fragment>
          <div >
            <label htmlFor="name">Store Name</label>
            <input
              className=""
              placeholder="Store Name"
              type="text"
              name="name"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div >
            <label htmlFor="name">Store Address</label>
            <input
              className=""
              placeholder="Store Name"
              type="text"
              name="phone"
              noValidate
              onChange={this.handleChange}
            />
          </div>
        <Modal 
          show={this.state.edit} 
          closedModal={this.closedModal}
        >
          <StoreProfile 
            data={this.state}
            closedPopup={this.closedModal}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Modal>
        <div className={styles.Store}>
          <img src={Logo} alt="" />
          <StoreInfo data={this.state} />
          <Button 
            btnType="Gray" 
            clicked={this.editHandler}
          >
            Edit Profile
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Store;
