import React, { Component } from 'react';
import axios from 'axios';
import CreatePDF from './pdf'

export default class RedirectFrom extends Component {

    constructor(props){
        super(props)
        this.state={
            user:[],
            // empty object which we will feel it after click
            selectedData: null
        }
    }

    //onload  data should load
    componentDidMount=()=>{
        axios.get("http://demo3399368.mockable.io/testpdf")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                user:res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    //assigned data to selected empty object
    handlepdf = (data)=>{
        console.log("handledata",data)
        this.setState({
            selectedData: data
        })
    }

  render() {
    return (
      <div>
        <button className="ui primary button" onClick={()=>this.handlepdf(this.state.user)}>Download PDF</button> 
        {/* check if you data then only show pdf */}
        {this.state.selectedData && <CreatePDF pdfdata={this.state.selectedData}/>}
      </div>
    )
  }
}
