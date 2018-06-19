import React from 'react';
import { Button, Modal,Table } from 'semantic-ui-react'

const ViewBill = () => (
   <Modal trigger={<Button className="ui button" role="button" style={{width:170,backgroundColor:'#4337f5',marginTop:20,}}>ViewBill</Button>}>

    <Modal.Header>Phone : 91 80 09001000</Modal.Header>
      <Modal.Description>
        <Table class="ui celled table" textAlign='center'>
  <thead class="">
    <tr class="">
      <th class="">Date</th>
      <th class="">Amount</th>
      <th class="">Due</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <td class="">Date:21th June 2019</td>
      <td class="">Amount:Rs 340.00</td>
      <td class="">Date:19th May 2018</td>
    </tr>
    {/* <tr class="">
      <td class="">Date:21th June 2019</td>
      <td class="">Amount:Rs 340.00</td>
      <td class="">Date:19th May 2018</td>
    </tr>
    <tr class="">
      <td class="">Date:21th June 2019</td>
      <td class="">Amount:Rs 340.00</td>
      <td class="">Date:19th May 2018</td>
    </tr> */}
  </tbody>
  
</Table>
{<div>
  <Button class="ui primary button" role="button" className='text-center' style={{width:170,backgroundColor:'#4337f5',marginTop:20,}}>View Previous Bills</Button>
  <Button class="ui primary button" role="button" style={{backgroundColor:'#4337f5',marginTop:20,}}><i aria-hidden="true" class="download icon"></i> Download Detailed Bill</Button>
</div>}

      </Modal.Description>
  </Modal>
)


export default ViewBill