import React, { Component } from 'react'

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class PhoneDetails extends Component {
    render(){
        const styles={
            btn1:{
                marginLeft: '20px'
            }
        }
    
        return (

                <div className="container">
                    
                    <table class="table">
                        <thead>
                             <tr>
                             <th>Phone No:</th>
                             <th>Status:</th>
                             <th>Customer Name:</th>
                             <th>Bill Date:</th>
        
                            </tr>
                      </thead>
                        <tbody>
                            <tr>
                            <td>{this.props.prodata.mobile_number}<br /></td>
                            <td>{this.props.prodata.status}</td>
                            <td>{this.props.prodata.customer_name}</td>
                            <td>{this.props.prodata.generate_bill_date}</td>
                        </tr>
                        </tbody>
                    </table>


                        <div className="row">
                            <button type="button" style={styles.btn1} className="btn btn-info" onClick={() => this.handleCheck(this.props.prodata)}> View Bill</button>
                            <button type="button" style={styles.btn1} className="btn btn-info"> View Plan</button>
                            <button type="button" style={styles.btn1} className="btn btn-info"> Help</button>
                        </div> 
                </div>                            
        )}
}
export default PhoneDetails
        {/*} <div className="row">
                            <div className="col-md-6">
                                <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                <label>Status: </label> {this.props.prodata.status}<br />
                            </div>
                            <div className="col-md-6">
                                <label>Customer Name: </label> {this.props.prodata.customer_name}<br/>
                                <label>Bill Date: </label> {this.props.prodata.generate_bill_date}
                            </div>
                        <div>

                        </div>
                    </div>*/}

           