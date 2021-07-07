import {CREATE_CONTACT ,  GET_CONTACT, UPDATE_CONTACT , DELETE_CONTACT} from '../constants/types'

export const addContact  = (contact) => {
    return(
      {
        type:CREATE_CONTACT,
        pyaload : contact,
      }
    )
  
  }

export const getContact = (id) =>{
  return(
    {
      type:GET_CONTACT,
      pyaload:id 
    }
  )
}

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});