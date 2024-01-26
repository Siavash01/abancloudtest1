'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function LoginForm({onAdd}) {
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post('http://localhost:8000/api/admin', formData);
      if (res.data) {
        onAdd && onAdd();
        toast.success('Logged in');
      } else {
        toast.error('error logging in');
      }
    } catch (e) {
      toast.error('error loggin in');
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
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Admin Login</h3>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput id="email" name='email' placeholder="name@company.com" required onChange={handleChange} />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput id="password" type='password' name='password' placeholder='********' required onChange={handleChange} />
              </div>

              <div className="w-full flex flex-wrap gap-2 justify-center items-center">
                <Button type='submit' disabled={loading}>Login</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
