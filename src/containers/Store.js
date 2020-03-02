import React, { Component, Fragment } from "react";
import Logo from "../assets/logo.jpg";
import Button from "../components/UI/Button/Button";
import styles from "./Store.module.css";
import Modal from '../components/UI/Modal/Modal';
import StoreInfo from "../components/StoreInfo/StoreInfo";
import StoreProfile from "../components/StoreProfile/StoreProfile";

class Store extends Component {

  state = {
    basic: {
      storeName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Store Name',
          size: 'w100',
          placeholder: 'Name'
        },
        value: 'K.O.I Thé',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      storeAddress: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Store Address',
          size: 'w50',
          placeholder: 'Address'
        },
        value: '521 Hồ Tùng Mậu, D1, HCM',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      storeDistrict: {
        elementType: 'select',
        elementConfig: {
          size: 'w25',
          label: 'District',
          option: [
            {value: 'district_1', displayValue: 'District 1'},
            {value: 'district_2', displayValue: 'District 2'},
            {value: 'district_3', displayValue: 'District 3'},
          ],
          placeholder: 'District'
        },
        value: 'District 1',
        validation: {},
        valid: true
      },
      storeCity: {
        elementType: 'select',
        elementConfig: {
          size: 'w25',
          label: 'City',
          option: [
            {value: 'hcm', displayValue: 'Hồ Chí Minh'},
            {value: 'hn', displayValue: 'Hà Nội'}
          ],
          placeholder: 'City'
        },
        value: 'Hồ Chí Minh',
        validation: {},
        valid: true
      },
      storePhone: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Phone #',
          size: 'w100',
          placeholder: 'Phone'
        },
        value: '(338) 886-9944',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    invoice: {
      companyName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Company Name',
          size: 'w100',
          placeholder: 'Name'
        },
        value: 'K.O.I Thé International Company',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      companyAddress: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'Company Address',
          size: 'w50',
          placeholder: 'Address'
        },
        value: '9682 Wakehurst Avenue Arlington Height, IL 60004',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      companyDistrict: {
        elementType: 'select',
        elementConfig: {
          size: 'w25',
          label: 'District',
          option: [
            {value: 'district_1', displayValue: 'District 1'},
            {value: 'district_2', displayValue: 'District 2'},
            {value: 'district_3', displayValue: 'District 3'},
          ],
          placeholder: 'District'
        },
        value: 'District 1',
        validation: {},
        valid: true
      },
      companyCity: {
        elementType: 'select',
        elementConfig: {
          size: 'w25',
          label: 'City',
          option: [
            {value: 'hcm', displayValue: 'Hồ Chí Minh'},
            {value: 'hn', displayValue: 'Hà Nội'}
          ],
          placeholder: 'City'
        },
        value: 'Hồ Chí Minh',
        validation: {},
        valid: true
      },
      companyMst: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: 'MST',
          size: 'w100',
          placeholder: 'MST'
        },
        value: 'P77744944',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    edit: false,
    imageURL: '',
  }

  editHandler = () => {
    this.setState({edit: true})
  }

  closedModal = () => {
    this.setState({edit: false})
  }

  dataChangeHandler = (event, inputKey) => {
    // Copy state
    const updatedForm = {
      ...this.state.basic
    }
    
    // const Key state
    const updateFormElement = {
      ...updatedForm[inputKey]
    }

    // get data from input 
    updateFormElement.value = event.target.value;

    // set data
    updatedForm[inputKey] = updateFormElement;


    this.setState({basic: updatedForm, invoice: updatedForm})
  }

  render() {
    const infoArray = [];
    for(let key in this.state.basic) {
      infoArray.push({
        id: key,
        config: this.state.basic[key]
      })
    }

    const invoiceArray = [];
    for(let key in this.state.invoice) {
      invoiceArray.push({
        id: key,
        config: this.state.invoice[key]
      })
    }

    console.log(infoArray);
    console.log(invoiceArray);
    
    return (
      <Fragment>
        <Modal 
          show={this.state.edit} 
          closedModal={this.closedModal}
        >
          <StoreProfile 
            closedPopup={this.closedModal} 
            basic={infoArray}
            invoice={invoiceArray}
            dataChanged={this.dataChangeHandler}
            saveChanged={this.dataSaveChangeHandler}
          />
        </Modal>
        <div className={styles.Store}>
          <img src={Logo} alt="" />
          <StoreInfo heading="STORE INFO." details={infoArray} dataChanged={this.dataChangeHandler} />
          <StoreInfo heading="REB INVOICE INFO." details={invoiceArray} dataChanged={this.dataChangeHandler} />
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
