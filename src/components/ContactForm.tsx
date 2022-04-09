import React, { useState, useCallback, ChangeEvent } from 'react';

export const ContactForm = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformData(data => ({
      ...data,
      [e.target.name]: e.target.textContent
    }))
  }, []);

  const handleSubmit = useCallback(() => {
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col bg-paleBlue px-10 py-8 rounded-xl text-white'>
      <label htmlFor="name">Your Name</label>
      <input 
        type="text"
        name="name"
        value={formData.name} 
        onChange={handleInputChange} 
      />
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleInputChange} 
      />
      <label htmlFor="subject">Subject</label>
      <input 
        type="text" 
        name="subject" 
        value={formData.subject} 
        onChange={handleInputChange} 
      />
      <label htmlFor="message">Message</label>
      <textarea 
        name="message" 
        value={formData.message} 
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit} className='self-end'>
        Send
      </button>
    </form>
  )
}
