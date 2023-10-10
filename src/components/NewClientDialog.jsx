import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "../style/userClient.css"

const InitialFormData = {
  clientName: "",
  bank: "",
  productName: "",
  term: "",
  rate: "",
  refixDate: "",
  amount: "",
  description: "",
};
const NewClientDialog = ({ mode, showDialog, setShowDialog }) => {
  const handleClose = () => setShowDialog(false);

  const [formData,setFormData] = useState(
    mode === "new" ? {...InitialFormData} : selectedClient
  );
  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData({...formData,[id]:value})
  }

  const handleSubmit = (event) => {
    
  }
  return (
    <>
      <Modal className="modal-dialog" show={showDialog} onHide={handleClose}>
        <Modal.Header closeButton>
          {mode === "new" ? (
            <Modal.Title>Add Client</Modal.Title>
          ) : (
            <Modal.Title>Edit Client</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>

          <Form className="form-container" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="clientName">
                <Form.Label>Client Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="string"
                  placeholder="Client's full name"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="bank">
                <Form.Label > Bank </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="string"
                  placeholder="Bank"
                  autoFocus
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="productName">
              <Form.Label > Product Name </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Product Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="term">
              <Form.Label > Term </Form.Label>
              <Form.Control onChange={handleChange}
                type="string"
                placeholder="Loan Term"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="rate">
              <Form.Label > Rate </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Interest Rate"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="refixDate">
              <Form.Label > Refix Date </Form.Label>
              <Form.Control onChange={handleChange}
                type="string"
                placeholder="Refix Date"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="amount">
              <Form.Label > Amount </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Loan Amount"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="description" >
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={handleChange}
                as="textarea"
                rows={3}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        {mode === "new" ? (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Edit
          </Button>
        )}
      </Modal>
    </>
  );
}


export default NewClientDialog