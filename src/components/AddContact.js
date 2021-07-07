import React , {useState} from 'react'
import { Container , Card } from 'reactstrap';
import { useForm } from "react-hook-form";
import {addContact} from '../actions/contactAcitons'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import shortid from 'shortid';
const AddContact = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const new_contact = {id:shortid.generate(),...data}
        dispatch(addContact(new_contact))
        history.push("/")
    };
    return (
        <Container className="mt-5 shadow p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name" 
                    {...register("name", { required: true })} 
                    />
                    {errors.name && <span style={{color:"red"}}>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                    {...register("email", { required: true })} 
                    />
                     {errors.email && <span style={{color:"red"}}>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone" 
                    {...register("phone", { required: true })} 
                    />
                    {errors.phone && <span style={{color:"red"}}>This field is required</span>}

                </div>
                <button type="submit" className="btn btn-primary mt-4">Add Contact</button>
        </form>
        </Container>
    )
}
export default AddContact;
