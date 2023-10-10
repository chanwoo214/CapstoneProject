import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import NewClientDialog from '../components/NewClientDialog';
import { useNavigate } from 'react-router-dom';
import ProtectedLayout from '../layouts/ProtectedLayout';
import "../style/userClient.css"
import ClientTable from '../components/ClientTable';

const UserPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [mode, setMode] = useState("new");


  const tableHeader = [
    "clientName",
    "bank",
    "productName",
    "term",
    "rate",
    "refixDate",
    "amount",
    "description",
    "Notes",
  ];

  const handleClickNewClient = () => {
    setMode("new");
    setShowDialog(true);
    
  };

  return (
    <ProtectedLayout>
      <div className="locate-center">
        <Container>
          <Button className="mt-2 mb-2" onClick={handleClickNewClient}>
            Add New Client +
          </Button>

          <ClientTable
          header = {tableHeader}
          data = {clientList}
          deleteItem={deleteItem}
          openEditForm={openEditForm}
          />
        </Container>

        <NewClientDialog
          mode = {mode}
          setShowDialog={setShowDialog}
          showDialog={showDialog}
        />

      </div>
    </ProtectedLayout>
  )

};
export default UserPage;