import React from 'react';

const Input = ({ name, placeholder, type }) =>
  <div className='Input'>
    <input id={name} autoComplete='false' required type={type} placeholder={placeholder} />
    <label htmlFor={name}></label>
  </div>

const Modal = ({ onSubmit }) =>
  <div className='Modal'>
    <form onSubmit={onSubmit} className='ModalForm'>
      <Input id='name' type='text' placeholder='Jack-Edward Oliver' />
      <Input id='username' type='email' placeholder='mrjackolai@gmail.com' />
      <Input id='password' type='password' placeholder='password' />
      <button>Log in <i className='fa fa-fw fa-chevron-right'></i></button>
    </form>
  </div>

export default Modal;
