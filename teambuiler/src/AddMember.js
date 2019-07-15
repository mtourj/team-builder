import React, { useState } from 'react';

const AddMember = props => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const addMember = e => {
    e.preventDefault();
    if(!formData.name.trim()){
      setErrorMessage('Please enter a name!');
      return;
    }
    if(!formData.email.trim()){
      setErrorMessage('Please eneter an email!');
      return;
    }
    if(!formData.role.trim()){
      setErrorMessage('Please enter a role!');
      return;
    }
    props.add({
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role.trim()
    });
    setFormData({});
    props.history.push('/');
  }

  const updateForm = event => {
    event.preventDefault();
    setErrorMessage('');
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <form className='add-member' onSubmit={addMember}>
      <div className='form-field'>
        <label>Name</label>
        <input 
          name='name'
          value={formData.name}
          onChange={updateForm}
        />
      </div>
      <div className='form-field'>
        <label>Email</label>
        <input 
          name='email'
          value={formData.email}
          onChange={updateForm}
        />
      </div>
      <div className='form-field'>
        <label>Role</label>
        <input 
          name='role'
          value={formData.role}
          onChange={updateForm}
        />
      </div>
      <button action='submit'>Submit</button>
      {
        errorMessage && <div className='error'>{errorMessage}</div>
      }
    </form>
  );
};

export default AddMember;