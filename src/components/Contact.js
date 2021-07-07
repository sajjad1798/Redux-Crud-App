import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { deleteContact } from "../actions/contactAcitons";
import { useDispatch } from "react-redux";
const Contact = ({contact}) =>{
  const dispatch = useDispatch();

    return(
        <tr>
        <th>
        <div className="custom-control custom-checkbox">
              <input type="checkbox"  className="custom-control-input"/>
          </div>
        </th>
        <td> <Avatar name={contact.name} round  size="40" className="mr-2"/> {contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>
            <Link to={`/contact/edit/${contact.id}`}><button className="btn btn-primary" style={{marginRight:"4px"}}>Edit</button></Link>
            <button  onClick={() => dispatch(deleteContact(contact.id))} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
}
export default Contact;