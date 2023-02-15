import React,{useState} from 'react';
import Navbar from '../../Components/Navbar';
import Welcome from './../../Images/Welcome.gif'
import axios from 'axios';
function Login(props) {
    const [user,setUser] = useState({
        email : "",
        password : ""
    });
    const handleSubmit = async() =>{
        try {
            const res = await axios.post('http://localhost:5000/', user);
            if(res.data.uname){
                localStorage.setItem('user',res.data)
                localStorage.setItem('auth',true)
                window.location.replace('/items')
            }
            else{
                alert(res.data)
            }
        } catch (error) {}
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

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                                <div className="mx-1 mx-md-4">
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input 
                                        type="email" 
                                        id="form3Example3c" 
                                        name = "email"
                                        value={user.email}
                                        onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}
                                        className="form-control" />
                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                        <input
                                        value={user.password}
                                        name='password'
                                        type="password"
                                        id="form3Example4c"
                                        className="form-control"
                                        onChange={(e)=>{setUser({...user,[e.target.name]:e.target.value})}}/>
                                        <label className="form-label" for="form3Example4c">Password</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Login</button>
                                        <a href="/newUser" className="m-2 4">Don't have an account</a>
                                    </div>
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

export default Login;