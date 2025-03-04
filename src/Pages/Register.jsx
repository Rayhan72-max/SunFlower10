import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { FaEye,FaEyeSlash} from "react-icons/fa";

const Register = (props) => {
    const {auth} = useContext(AuthContext);
    const {signUp} = useContext(AuthContext)
    const [isLess,setIsLess]=useState(false);
    const [isUpper,setUpper]=useState(false);
    const [isLower,setLower]=useState(false);
    const [isOpen,setOpen] =useState(false);
    const handleEye=()=>{
        if(isOpen)
        {setOpen(false)}else{
            setOpen(true)
        }
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
        
         const name= e.target.name.value;
         const address= e.target.address.value;
         const phone= e.target.phone.value;
         const password= e.target.password.value;
         const email= e.target.email.value;
         const photoUrl = e.target.photo.value;
         
         if(password.length<6){
                return setIsLess(true)
         }else if(/[A-Z]/.test(password) === false){
            return setUpper(true)
         }else if(/[a-z]/.test(password)===false){
            return setLower(true)
         }else{
            
            signUp(email,password)
            .then((userCredential) => {
              // Signed up 
              
              updateProfile(auth.currentUser,{
                displayName:name,photoURL:photoUrl,phoneNumber:phone
              })
              .then()
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
              // ..
            });
            

         }
        }
        
            
        


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={isOpen?"text":"password"} name="password" placeholder="password" className="input input-bordered" required /><span onClick={handleEye} className='relative bottom-6 left-52'>{isOpen?<FaEye />: <FaEyeSlash />}</span>
                                {isLess?<p>Password must be more than 6 letter</p>:""}
                                {isLower?<p>Use At leat one small letter</p>:""}
                                {isUpper?<p>Use At least One Capital letter</p>:""}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">SignUp</button>
                                <p>Already signed up? </p>
                                <Link className='btn btn-primary mt-2' to="/login"><button >Sign In</button></Link>
                                <button>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;