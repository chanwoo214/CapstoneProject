import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ClientTable({ header, data, deleteClient, openEditForm }) {
    return (
        <div className='overflow-x'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {header.map((title, index) => (
                            <th key={index}>{title} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <th>{index}</th>
                                <th>{item.clientName}</th>
                                <th>{item.productName}</th>
                                <th>{item.bank}</th>
                                <th>{item.term}</th>
                                <th>{item.rate}</th>
                                <th>{item.refixDate}</th>
                                <th>{item.amount}</th>
                                <th>{item.description}</th>
                                <th style={{ minWidth: "100px" }}>
                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() => deleteClient(item._id)}
                                        className="mr-1"
                                    >
                                        -
                                    </Button>
                                    <Button size="sm" onClick={() => openEditForm(item)}>
                                        Edit
                                    </Button>
                                </th>
                            </tr>
                        ))
                    ) : (
                        <tr>No Data to show</tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default ClientTable;