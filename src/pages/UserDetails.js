import React ,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Table } from "react-bootstrap";
import { fetchAllUsers } from './UserAction';


export const UserDetails = () => {
const dispatch = useDispatch()
useEffect(() => {
    fetchAllUsers()
},dispatch)  
return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Role</th>
                <th>City</th>
                <th>State</th>
            </tr>
            <tr>
                <td>1</td>
                <td>As</td>
                <td>Sa</td>
                <td>AsSa@gmail.com</td>
                <td>14/06/1997</td>
                <td>USer</td>
                <td>Bhopal</td>
                <td>MP</td>
            </tr>

        </thead>
    </Table>
  )
}
