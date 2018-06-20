import React, { Component } from 'react'
import Modal from 'react-modal';
const customStyles = {
    content: {
        width: '55%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class BillHistory extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
         modalIsOpen: false
        };
        
 this.openModal = this.openModal.bind(this);

 this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
       }
      
       
       closeModal() {
        this.setState({modalIsOpen: false});
       }
  render() {
    return (
      <div>
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={this.closeModal}>close</button>
      <div>I am a modal</div>
        {this.props.hdata.month}
    </Modal>
      </div>
    )
  }
}
export default BillHistory;