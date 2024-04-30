import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const SignUp = () => {
    const {creatUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password= form.password.value;
        const allForm = {name, email, photo, password}
        console.log(allForm);
        creatUser(email, password)
        .then(result => {
            console.log(result.user);
            // new user 
            const createdAt = result.user?. metadata?.creationTime
            const user = {name,photo,email,password,createdAt}
            //    useig axois

            axios.post('http://localhost:5000/user', user)
            .then(data =>{
              if(data.data.insertedId);
            })

            // useig fetch
            // fetch('http://localhost:5000/user',{
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(user)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     if(data.insertedId){
            //         Swal.fire({
            //             title: 'success!',
            //             text: 'user updated succsessfully',
            //             icon: 'success',
            //             confirmButtonText: 'Cool'
            //           })
            //     }
            // })
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
           <div >
             
           <h1 className="text-5xl font-bold text-center">Signup now!</h1>
            <form onSubmit={handleSignUp} className="card-body md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
           </div>

        </div>
    );
};

export default SignUp;