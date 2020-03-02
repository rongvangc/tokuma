import React, { Component, Fragment } from "react";
import Logo from "../assets/logo.jpg";
import Button from "../components/UI/Button/Button";
import styles from "./Store.module.css";
import Modal from '../components/UI/Modal/Modal';
import StoreInfo from "../components/StoreInfo/StoreInfo";
import StoreProfile from "../components/StoreProfile/StoreProfile";

class Store extends Component {

  state = {
    formData: {
      storeName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
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
          option: [
            {value: 'district_1', displayValue: 'District 1'},
            {value: 'district_2', displayValue: 'District 2'},
            {value: 'district_3', displayValue: 'District 3'},
          ],
        },
        value: 'District 1',
        validation: {},
        valid: true
      },
      storeCity: {
        elementType: 'select',
        elementConfig: {
          option: [
            {value: 'hcm', displayValue: 'Hồ Chí Minh'},
            {value: 'hn', displayValue: 'Hà Nội'}
          ],
        },
        value: 'Hồ Chí Minh',
        validation: {},
        valid: true
      },
      storePhone: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
        },
        value: '(338) 886-9944',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      companyName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
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
          option: [
            {value: 'district_1', displayValue: 'District 1'},
            {value: 'district_2', displayValue: 'District 2'},
            {value: 'district_3', displayValue: 'District 3'},
          ],
        },
        value: 'District 1',
        validation: {},
        valid: true
      },
      companyCity: {
        elementType: 'select',
        elementConfig: {
          option: [
            {value: 'hcm', displayValue: 'Hồ Chí Minh'},
            {value: 'hn', displayValue: 'Hà Nội'}
          ],
        },
        value: 'Hồ Chí Minh',
        validation: {},
        valid: true
      },
      companyMst: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
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

  // dataChangeHandler = (event, inputKey) => {
  //   // Copy state
  //   const updatedForm = {
  //     ...this.state.formData
  //   }
    
  //   // const Key state
  //   const updateFormElement = {
  //     ...updatedForm[inputKey]
  //   }

  //   // get data from input 
  //   updateFormElement.value = event.target.value;

  //   // set data
  //   updatedForm[inputKey] = updateFormElement;


  //   this.setState({formData: updatedForm})
  // }

  render() {
    
    return (
      <Fragment>
        <Modal 
          show={this.state.edit} 
          closedModal={this.closedModal}
        >
          <StoreProfile 
            data={this.state.formData}
          />
        </Modal>
        <div className={styles.Store}>
          <img src={Logo} alt="" />
          <StoreInfo data={this.state.formData} dataChanged={this.dataChangeHandler} />
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
