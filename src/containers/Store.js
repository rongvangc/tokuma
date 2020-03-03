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
    district: 'District 1',
    city: 'Hà Nội',
    phone: '(338) 886-9944',
    redInvoice: {
      name: 'K.O.I Thé International Company',
      address: '9682 Wakehurst Avenue Arlington Height, IL 60004',
      district: 'District 1',
      city: 'Hà Nội',
      taxCode: 'P77744944',
    },
    edit: false,
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState({name: newProps.name});
  // }

  editHandler = () => {
    this.setState({edit: true})
  }

  closedModal = (e) => {
    e.preventDefault()
    this.setState({edit: false})
  }

  handleChange = name => (e) => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    }, () => console.log(this.state))
    
    console.log("name", name);
    console.log("value", e.target.value );
  }

  handleSubmit = (...formData) => {
    // e.preventDefault()
    this.setState({...formData})
    this.setState({edit: false})

    console.log(this.state)

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
