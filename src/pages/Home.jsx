import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/api';
import Table from '../component/Table';

export default function Home() {


    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        fetchUsers();
    }, []);


    useEffect(() => {
        console.log("users------------------------------------->", users);
    }, [users]);

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) 
    || user.username.toLowerCase().includes(search.toLowerCase())
    || user.email.toLowerCase().includes(search.toLowerCase())
    || user.website.toLowerCase().includes(search.toLowerCase())
    || user.phone.toLowerCase().includes(search.toLowerCase())
    || user.company.name.toLowerCase().includes(search.toLowerCase())
    || user.address.city.toLowerCase().includes(search.toLowerCase())
    || user.address.street.toLowerCase().includes(search.toLowerCase())
    || user.address.suite.toLowerCase().includes(search.toLowerCase())
    || user.address.zipcode.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
        <h1>User details</h1>
        <input type="text" value={search} placeholder='Search by name' onChange={(e) => setSearch(e.target.value)} />
        {users.length > 0 && <Table users={filteredUsers} />}
    </>

  )



}

