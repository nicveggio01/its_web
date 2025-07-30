import { useEffect, useState } from "react";


const API_URL = "/api/users";
const UserCrud =()=>{
    const [users,setUsers] = useState([]);

    const getUsers =async ()=>{
        const response = await fetch(API_URL);
        const result = await response.json();
        setUsers(result);
    }  
    useEffect(()=>{
        getUsers()
    },[])

    return (
        <div className="container my-5">
        <h1 className = "mb-4"> USER CRUD </h1>

        <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
                <thead className ="table-light">
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Telefono</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        users.map((u)=>{
                            return (
                                <tr>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
    )
}

export default UserCrud;