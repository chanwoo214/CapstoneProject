import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NewClientDialog from '../components/NewClientDialog';
import ProtectedLayout from '../layouts/ProtectedLayout';
import "../style/userClient.css"
import ClientTable from '../components/ClientTable';
import api from '../utils/api';
import { clientActions } from '../actions/clientActions';
import * as types from "../constants/client.constants";
import { useDispatch } from 'react-redux';

const UserPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [mode, setMode] = useState("new");
  const [clientList, setClientList] = useState([]);
  const dispatch = useDispatch();

  const tableHeader = [
    "#",
    "Client Name",
    "Product Name",
    "Bank",
    "Loan Term",
    "Interest Rate",
    "Loan Refix Date",
    "Amount of Loan",
    "Description",
  ];

  const getClients = async () => {
    const response = await api.get("/clients");
    setClientList(response.data.data);
  };

  useEffect(() => {
    getClients();
  }, []);

  const deleteClient = (id) => {
    dispatch(clientActions.deleteClient(id));
  };

  const openEditForm = (client) => {
    setMode("edit");
    dispatch({ type: types.SET_SELECTED_CLIENT, payload: client });
    setShowDialog(true);
  };

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
            header={tableHeader}
            data={clientList}
            deleteClient={deleteClient}
            openEditForm={openEditForm}
          />
        </Container>

        <NewClientDialog
          mode={mode}
          setShowDialog={setShowDialog}
          showDialog={showDialog}
        />

      </div>
    </ProtectedLayout>
  )

};
export default UserPage;