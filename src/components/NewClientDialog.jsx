import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "../style/userClient.css"
import { clientActions } from '../actions/clientActions';
import { useDispatch, useSelector } from 'react-redux';

const InitialFormData = {
  clientName: "",
  productName: "",
  bank: "",
  term: "",
  rate: "",
  refixDate: "",
  amount: "",
  description: "",
};


const NewClientDialog = ({ mode, showDialog, setShowDialog }) => {
  const selectedClient = useSelector((state) => state.client.selectedClient);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    mode === "new" ? { ...InitialFormData } : selectedClient
  );

  const handleClose = () => {
    setShowDialog(false);
    setFormData({ ...InitialFormData });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDialog(false);
    if (mode === "new") {
      dispatch(clientActions.createClient({ ...formData })
      );
      setShowDialog(false);
    } else {
      dispatch(
        clientActions.editClient
          ({ ...formData },selectedClient._id));
          
    }
    setShowDialog(false);
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value })

  }
  useEffect(() => {
    if (showDialog) {
      if (mode === "edit") {
        setFormData(selectedClient);
      } else {
        setFormData({ ...InitialFormData });
      }
    }
  }, [showDialog]);

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


        <Form className="form-container" onSubmit={handleSubmit}>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="clientName">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Client's full name"
                required
                value={formData.clientName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Product Name"
                required
                value={formData.productName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="bank">
              <Form.Label > Bank </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Bank"
                required
                value={formData.bank}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="rate">
              <Form.Label > Rate </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Interest Rate"
                required
                value={formData.rate}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="term">
              <Form.Label > Term </Form.Label>
              <Form.Control onChange={handleChange}
                type="string"
                placeholder="Loan Term"
                required
                value={formData.term}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="refixDate">
              <Form.Label > Refix Date </Form.Label>
              <Form.Control onChange={handleChange}
                type="string"
                placeholder="Refix Date"
                required
                value={formData.refixDate}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="amount">
              <Form.Label > Amount </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="string"
                placeholder="Loan Amount"
                required
                value={formData.amount}
              />
            </Form.Group>
          </Row>

          <Form.Group
            className="mb-1"
            controlId="description" >
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              as="textarea"
              rows={2}
              required
              value={formData.description}
            />
          </Form.Group>

          {mode === "new" ? (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Edit
            </Button>
          )}
        </Form>
      </Modal>
    </>
  );
}


export default NewClientDialog