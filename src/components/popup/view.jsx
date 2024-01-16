'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function PopUp({onAdd}) {
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
    [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:8000/api/saveuserdata', formData);
      if (res.data) {
        onAdd && onAdd();
        toast.success('request send successfully');
      } else {
        toast.error('error sending request');
      }
    } catch (e) {
      toast.error('error sending request');
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Enter you information</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput id="name" name='name' type="text" required onChange={handleChange} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastname" value="Lastname" />
                </div>
                <TextInput id="lastname" name='lastname' type="text" required onChange={handleChange} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput id="email" name='email' placeholder="name@company.com" required onChange={handleChange} />
              </div>
              <div className="w-full flex flex-wrap gap-2 justify-center items-center">
                <Button type='submit' disabled={loading}>CTA</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
