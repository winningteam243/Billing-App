import React, { Component } from 'react';
import axios from 'axios';
import {Panel} from 'primereact/components/panel/Panel';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';


export default class LastMonth extends Component {

    constructor(props){
        super(props)
        this.state={
            product:[]
        }
    }

    componentDidMount=()=>{
        axios.get("https://demo1509725.mockable.io/product_details")
        .then((res)=>{
            console.log(res.data);
            this.setState({
                product:res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  render() {
      const prd =this.state.product.map(data=>{
        <Panel key={data.id}  header={data.number}>
        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
    </Panel>
    })
    return (
      <div>
        <h1>product</h1>
        {prd}
        
      </div>
    )
  }
}
