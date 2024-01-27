'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { isLogin, setToken } from '../../utils/tokenstorage';

import { UserTable } from '../../components/usertable';

import { useNavigate } from 'react-router-dom';

export function LoginForm({onAdd}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
        setToken(res.data.token);
        navigate('/admin');
        console.log('navigated');
      } else {
        toast.error('error logging in');
      }
    } catch (e) {
      toast.error('error loggin in');
    } finally {
      setLoading(false);
    }
  }

  if (isLogin()) {
    return <UserTable />
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='flex items-center justify-center w-screen h-screen'>
      <div className="space-y-6 w-96">
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
    </>
  );
}
