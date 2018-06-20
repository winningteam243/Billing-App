
import React, { Component } from 'react'
import { Button, Modal,Table } from 'semantic-ui-react'
import productDetails from '../user-services/history_services'

class BillHistory extends Component {
    constructor(){
        super()
        this.state ={
            HistoryData : []
        }
        this.productdetails = new productDetails()

    }
    componentDidMount = () =>{
        this.productdetails.getHistory()
        .then((historyData)=>{
           this.setState({
            HistoryData:historyData
           })
        })
        
    }
  render() {
      const hData = this.state.HistoryData.map(pvData =>  {
          return(
                         <tr key = {pvData.id}>
                         
                         <td> {pvData.month} </td>
                         <td> {pvData.amount} </td>
                          <td> {pvData.due_date} </td>
                        </tr>)}
      )
    return (
      <div>
         <Modal trigger={<Button className="ui button" role="button" 
         style={{width:170,backgroundColor:'#4337f5',marginTop:20,color:'#fff'}}>PreviousBill</Button>}>
         <Modal.Header>Previous Bill Details</Modal.Header>
     <Modal.Description>
         <Table className="ui celled table" textAlign='center'>
   <thead className="ui table">
     <tr>
      <th>Month</th>
       <th>Amount</th>
       <th>Due Date</th>
     </tr>
   </thead>
   <tbody >
    
   {hData}
   </tbody>
  
 </Table>
  

       </Modal.Description>
 </Modal> 
      </div>
    )
  }
}
export default BillHistory