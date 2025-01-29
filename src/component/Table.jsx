import React from 'react'
import "../styles/Table.css";

export default function Table({users}) {

    return (
        <div className='table-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}

                </tbody>
            </table>


        </div>
    )
}
