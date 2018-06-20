import React, { Component } from 'react'
import UserService from '../../shared/services/user-service';
import PhoneDetails from './phone-details';
import {Panel} from 'primereact/components/panel/Panel';
 class Phone extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
        this.userService=new UserService()
    }
    componentDidMount =()=>{
      this.userService.getUser()
      .then((product) => {
          this.setState({
            products: product
  
          })
        })
    }
  
  
  render() {
    const productData =this.state.products.map(product => <PhoneDetails key={product.id} prodata={product} />)
    return (
      <div>
        <div className="content-sectiob implementation">
        <Panel header="Phone-Details" toggleable={true}  >
        {productData} 
        </Panel>
        </div>
      </div>
    )
  }
}
export default Phone