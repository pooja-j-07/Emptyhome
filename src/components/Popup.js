import React, { Component } from "react";
import {Modal,Button} from 'react-bootstrap';
import download from '../images/download.png';

export default class Popup extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <Modal {...this.props}  aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header  closeButton>
        </Modal.Header>
        <Modal.Body>
          <div class="content">
        <h5>Add multiple products at once</h5>
        <p>Upload multiple products information <br/>at once through excel sheets.</p>
        <img src={download}/>        <br/>
        <a href="/">Click to Upload excel file</a>
        <br/>        <br/>
        <br/>
        <button type="button" class="btn btn-primary shadow-none">DONE</button>
        <br/><br/>
        </div>
        </Modal.Body>
        </Modal>
      );
  }
}
