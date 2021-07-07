import React from 'react';
import { Table  , Container} from 'reactstrap';
import { useSelector } from 'react-redux';
import Contact from './Contact';

const Contacts = (props) => {
  const contacts =  useSelector(state => state.contacts);
  console.log(contacts);
  return (
      <Container className="mt-5">
    <Table className="shadow">
      <thead>
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox"  className="custom-control-input"/>
                </div>
            </th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map((contact) =>(
            <Contact  contact={contact}/>
          ))
}
      </tbody>
    </Table>
    </Container>
  );
}

export default Contacts;