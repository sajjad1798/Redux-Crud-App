import React , {useState , useEffect} from 'react'
import { Container } from 'reactstrap';
import { useForm } from "react-hook-form";
import {updateContact , getContact} from '../actions/contactAcitons'
import { useDispatch , useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {useParams} from "react-router-dom"
import shortid from 'shortid';
const EditContact = () => {
    const contact = useSelector((state) => state.contacts.contact)
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")

    useEffect(() =>{
        if(contact != null){
            setName(contact.name)
            setEmail(contact.email)
            setPhone(contact.phone)
        }
        dispatch(getContact(id));
    } , [contact])
    let {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = e => {
        e.preventDefault();
        const update_contact =Object.assign(contact ,{
            name:name,
            email:email,
            phone:phone
        } ) 
        console.log(update_contact)
        dispatch(updateContact(update_contact));
        history.push("/")
    };
    return (
        <Container className="mt-5 shadow p-3">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                     
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    

                </div>
                <button type="submit" className="btn btn-primary mt-4">Update Contact</button>
        </form>
        </Container>
    )
}
export default EditContact;
