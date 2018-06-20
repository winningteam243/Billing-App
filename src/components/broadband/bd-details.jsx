import React, { Component } from 'react'

 class Bddetails extends Component {
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
                <label>Phone No: </label> {this.props.bd_details.mobile_number}<br />
                <label>Custome Name: </label> {this.props.bd_details.customer_name}
                <br />

            </div>
            <div className="col-md-6">
                
                <label>Bill Date: </label> {this.props.bd_details.generate_bill_date}<br/>
                <label>Status: </label> {this.props.bd_details.status}<br />

            </div>
            <div>

            </div>

        </div>
        <div className="row">
            <button type="button" style={styles.btn1} className="btn btn-success" onClick={() => this.handleCheck(this.props.prodata)}> View Bill</button>
            <button type="button" style={styles.btn1} className="btn btn-success"> View Plan</button>
            <button type="button" style={styles.btn1} className="btn btn-success"> Support</button>
        </div>
    </div>
    )
  }
}
export default Bddetails 