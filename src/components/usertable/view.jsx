
'use client';

import { Table } from 'flowbite-react';
import axios from '../../axois';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { Spinner } from 'flowbite-react';


export function UserTable({isrefresh}) {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  async function getUserData() {
    setIsloading(true);
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/showuserdata");
      res.data && setData(res.data); // this puts res.data in data
    } catch {
      toast.error("server not responding");
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, [isrefresh]);

  if (isloading) {
    return (
      <Spinner/>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Lastname</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map(item => <UserTableRow key={item.email} name={item.name} lastname={item.lastname} email={item.email}/>)}
        </Table.Body>
      </Table>
    </div>
  );
}

function UserTableRow({name, lastname, email}) {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {name}
      </Table.Cell>
      <Table.Cell>{lastname}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
    </Table.Row>
  );
}
