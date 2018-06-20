import React, { Component } from 'react'

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

 class DigitalTvDeatils extends Component {
  render() {
    const styles = {
        btn1: {
            marginLeft: '10px'
        }
    }

    return (
     
         
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                <label>Custome Name: </label> {this.props.prodata.customer_name}
                <br />

            </div>
            <div className="col-md-6">
                <label>Status: </label> {this.props.prodata.status}<br />
                <label>Bill Date: </label> {this.props.prodata.generate_bill_date}

            </div>
            <div>

            </div>

        </div>
        <div className="row">
            <button type="button" style={styles.btn1} className="btn btn-primary" > View Bill</button>
            <button type="button" style={styles.btn1} className="btn btn-primary"> View Plan</button>
            <button type="button" style={styles.btn1} className="btn btn-primary"> Support</button>
        </div>
    </div>


    )
  }
}
export default DigitalTvDeatils