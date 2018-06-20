import React, { Component } from 'react'
import UserService from '../../shared/services/user-service';
import { Panel } from 'primereact/components/panel/Panel';
import  Bddetails  from './bd-details'

 class Broadband extends Component {
    constructor (){
        super()
        this.state = {
          broadband_details:[]
        }
        this.Userservice = new UserService()
      }
      componentDidMount =()=>{
        this.Userservice.getBroadband()
        .then((product) => {
            this.setState({
              broadband_details: product
    
            })
            console.log("Produt Deatails",this.state.broadband_details)
        })
      }
  render() {
      const broadbanddet=this.state.broadband_details.map(bd => <Bddetails key={bd.id} bd_details={bd}  /> )
    return (
        <div className="content-section implementation">

        <Panel header='broadband details' toggleable={true}  >
{broadbanddet}   
</Panel> 

</div>
    )
  }
}
export default Broadband;