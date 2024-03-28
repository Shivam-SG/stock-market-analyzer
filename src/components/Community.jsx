import React, { useState } from 'react';
import axios from 'axios';

const Community = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Community;
