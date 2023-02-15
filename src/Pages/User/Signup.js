import React,{useState} from 'react';
import Navbar from '../../Components/Navbar';
import Welcome  from './../../Images/Welcome.gif';
import axios from 'axios';
function Signup(props) {
    const [user,setUser] = useState({
        uname:"",
        email:"",
        password:"",
        repeatPassword:"",
    })
    const handleSubmit = async() =>{
        try {
            if(user.uname!=="" && user.password!=="" &&
                user.email!=="" && user.repeatPassword!==""){
                if(user.password===user.repeatPassword){
                    const res = await axios.post('http://localhost:5000/newUser', user);
                    if(res.data.code===200){
                        window.location.replace('/')
                    }
                    else{
                        alert(res.data)
                    }
                }
                else{
                    alert("password should be same as confirm password")
                }
            }
            else{
                alert("Everything should be filled")
            }
        setUser({uname:"",email:"",password:"",repeatPassword:"",})
        }catch(error){}
    }
    return (
        <div>
            <Navbar/>
            <div>
                <section className="vh-100" style={{backgroundColor: "#eee"}}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <div className="mx-1 mx-md-4">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input
                                            type="text"
                                            id="form3Example1c"
                                            name='uname'
                                            className="form-control uname"
                                            value = {user.uname}
                                            onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
                                            <label className="form-label" for="form3Example1c">Your Name</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input
                                        name="email"
                                        value = {user.email}
                                        type="email"
                                        id="form3Example3c"
                                        className="form-control email"
                                        onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}
                                        />
                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="password"
                                        name = "password"
                                        value = {user.password}
                                        id="form3Example4c" 
                                        className="form-control passwd" 
                                        onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}
                                        />
                                        <label className="form-label" for="form3Example4c">Password</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="password"
                                        name = "repeatPassword"
                                        onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}
                                        value={user.repeatPassword}
                                        id="form3Example4cd"
                                        className="form-control rPasswd" />
                                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                        </div>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                        <label className="form-check-label" for="form2Example3">
                                        I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                                    </div>
                                        <a style={{display:"flex", justifyContent:"center"}} href="/" className="m-2 4">Already have an account</a>

                                </div>

                            </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src={Welcome} className="img-fluid" alt="sampleImage"/>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</div>
    );
}

export default Signup;