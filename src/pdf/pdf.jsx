import React, { Component } from 'react';
import PDF from 'jspdf';
import RedirectFrom from './redirectfrom'

export default class CreatePDF extends Component {

    

         

  render() {
      const test= this.props.pdfdata.id;
      console.log("value",test);
      // to test code with fake value so that we can use data from download click
      const doc1 = new PDF('p','pt','c6');
      doc1.text(20,80,'number'+ test);
      doc1.save("finalBill.pdf");
    return (
      <div>
        <h1>PDF</h1>
      </div>
    )
  }
}
