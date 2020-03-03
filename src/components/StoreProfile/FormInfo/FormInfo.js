import React, { Component }  from 'react';
import styles from './FormInfo.module.css'
import Button from '../../UI/Button/Button'


class FormInfo extends Component {

  closedHandler = (event) => {
    event.preventDefault()
    this.props.closedPopup()
  }

  render () {
    return(
      <form onSubmit={this.props.handleSubmit} noValidate >
        <div className={styles.FormInfo}>
          <h4>BASIC INFO</h4>
          
          <div className={styles.Input} >
            <label htmlFor="name">Store Name</label>
            <input
              className=""
              placeholder="Store Name"
              type="text"
              name="name"
              noValidate
              onChange={() => this.props.handleChange("this.state.name")}
            />
          </div>

          <div className={[styles.Input, styles.w50].join(' ')} >
            <label htmlFor="email">Store Address</label>
            <input
              className=""
              placeholder="Store Address"
              type="text"
              name="address"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div className={[styles.Input, styles.w25].join(' ')} >
            <select
              className=""
              type="select"
              name="district"
              noValidate
              onChange={this.handleChange}
            >
              {this.props.data.district.map(dsc => (
                <option key={dsc.value} value={dsc.value}>{ dsc.displayValue }</option>
              ))}
            </select>
          </div>

          <div className={[styles.Input, styles.w25].join(' ')} >
            <select
              className=""
              type="select"
              name="city"
              noValidate
              onChange={this.handleChange}
            >
              {this.props.data.city.map(cty => (
                <option key={cty.value} value={cty.value}>{ cty.displayValue }</option>
              ))}
            </select>
          </div>

          <div className={styles.Input} >
            <label htmlFor="phone">Phone #</label>
            <input
              className=""
              placeholder="Phone #"
              type="text"
              name="phone"
              noValidate
              onChange={this.handleChange}
            />
          </div>
    
          <h4>RED INVOICE INFO</h4>

          <div className={styles.Input} >
            <label htmlFor="name">Company Name</label>
            <input
              className=""
              placeholder="Company Name"
              type="text"
              name="name"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div className={[styles.Input, styles.w50].join(' ')} >
            <label htmlFor="email">Company Address</label>
            <input
              className=""
              placeholder="Company Address"
              type="text"
              name="address"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div className={[styles.Input, styles.w25].join(' ')} >
            <select
              className=""
              type="select"
              name="district"
              noValidate
              onChange={this.handleChange}
            >
              {this.props.data.redInvoice.district.map(dsc => (
                <option key={dsc.value} value={dsc.value}>{ dsc.displayValue }</option>
              ))}
            </select>
          </div>

          <div className={[styles.Input, styles.w25].join(' ')} >
            <select
              className=""
              type="select"
              name="city"
              noValidate
              onChange={this.handleChange}
            >
              {this.props.data.redInvoice.city.map(cty => (
                <option key={cty.value} value={cty.value}>{ cty.displayValue }</option>
              ))}
            </select>
          </div>

          <div className={styles.Input} >
            <label htmlFor="taxCode">Phone #</label>
            <input
              className=""
              placeholder="Phone #"
              type="text"
              name="taxCode"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <Button btnType="Green">Save</Button>
          <Button btnType="None" clicked={this.closedHandler}>Cancel</Button>
        </div>
      </form>
    )
  }
}

export default FormInfo
