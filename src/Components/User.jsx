
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const User = () => {
    const loderUser = useLoaderData()
    const [users, setUsers] = useState(loderUser)
    const handleUserDelete = id => { 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            
          })
          

        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
          
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                    })
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    }
    return (
        <div>
            <h1>User {loderUser.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>proto</th>
                            <th>createdAt</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <tr key={user._id} className="bg-base-200">
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td>{user.photo}</td>
                                <td>{user.createdAt}</td>
                                <button onClick={() => handleUserDelete(user._id)} className="btn bg-red-500 text-2xl text-white font-bold">X</button>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;