import React from 'react'
import Avatar from 'react-avatar';
const Contact = ({contact}) =>{
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
            <button className="btn btn-primary" style={{marginRight:"4px"}}>Edit</button>
            <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
}
export default Contact;