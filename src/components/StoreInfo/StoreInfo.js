import React, { Component } from 'react';
import styles from './StoreInfo.module.css';
import StoreItem from './StoreItem/StoreItem';

class StoreInfo extends Component {
  render() {
    let filterObj = this.props.details.filter((obj) => {
      return (
          obj.id === "storeName" || 
          obj.id === "storeAddress" ||
          obj.id === "storePhone" ||
          obj.id === "companyName" || 
          obj.id === "companyAddress" ||
          obj.id === "companyMst"
        )
    })

    console.log(filterObj);
    
    
    return (
      <div className={styles.StoreInfo}>
        <h4>{this.props.heading}</h4>
        <ul>
          {filterObj.map(detail => (
            <StoreItem 
              key={detail.key} 
              name={detail.config.elementConfig.label} 
              value={detail.config.value}
              dataChanged={(event) => this.dataChanged(event, detail.key)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default StoreInfo