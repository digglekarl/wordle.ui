import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';

function Users() {
    const [data, setData] = useState<any[]>([]);
    const [mode, setMode] = useState('online')
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                setData(result);
                localStorage.setItem("users", JSON.stringify(result));
            });
        }).catch(err => {
            setMode('offline');
            let collection = localStorage.getItem("users");
            setData(JSON.parse(collection || '{}'));
        });
    }, []);

    return (
        <div>
            <div>
                {
                    mode ==='offline'?
                    <div className="alert alert-warning" role="alert">You are in offline mode</div>:
                    null
                }
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>


    )
}

export default Users;