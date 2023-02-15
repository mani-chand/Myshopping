import React,{useState} from 'react';
import Navbar from '../../Components/Navbar';
function Checkout(props) {
    const [delivery,setDelivery] = useState({
        firstName:"",
        lastName:"",
        address:"",
        email:"",
        mobile:"",
        Info:"",
    })
    const handleSubmit = () =>{
        console.log(delivery)
    }
    return (
        <div>
            <Navbar/>
            <div>
                <h1 style={{display:"flex",justifyContent:'center',marginBottom:"15px"}}>Customer Details</h1>
            </div>
            <div>
                <div className="row mb-4">
                    <div className="col">
                    <div className="form-outline">
                        <input
                        name="firstName"
                        value={delivery.firstName}
                        onChange={(e)=>{setDelivery({...delivery,[e.target.name]:e.target.value})}}
                        required type="text"
                        id="form6Example1"
                        className="form-control" />
                        <label className="form-label" for="form6Example1">First name</label>
                    </div>
                    </div>
                    <div className="col">
                    <div className="form-outline">
                        <input
                        name="lastName"
                        onChange={(e)=>{setDelivery({...delivery,[e.target.name]:e.target.value})}}
                        value={delivery.lastName}
                        required
                        type="text"
                        id="form6Example2"
                        className="form-control" />
                        <label className="form-label" for="form6Example2">Last name</label>
                    </div>
                    </div>
                </div>



                <div className="form-outline mb-4">
                    <input
                    name="address"
                    value={delivery.address}
                    onChange={(e)=>{setDelivery({...delivery,[e.target.name]:e.target.value})}}
                    required
                    type="text"
                    id="form6Example4"
                    className="form-control" />
                    <label className="form-label" for="form6Example4">Address</label>
                </div>


                <div className="form-outline mb-4">
                    <input
                    name="email"
                    value={delivery.email}
                    onChange={(e)=>{setDelivery({...delivery,[e.target.name]:e.target.value})}}
                    required type="email"
                    id="form6Example5"
                    className="form-control" />
                    <label className="form-label" for="form6Example5">Email</label>
                </div>


                <div className="form-outline mb-4">
                    <input
                    name="mobile"
                    value={delivery.mobile}
                    onChange={(e)=>{setDelivery({...delivery,[e.target.name]:e.target.value})}}
                    required
                    type="number"
                    id="form6Example6"
                    className="form-control" />
                    <label className="form-label" for="form6Example6">Phone</label>
                </div>


                <div className="form-outline mb-4">
                    <textarea 
                    name='Info'
                    value={delivery.Info}
                    onChange={(e)=>{setDelivery({...delivery,[e.target.name]:e.target.value})}}
                    className="form-control"
                    id="form6Example7"
                    rows="4"></textarea>
                    <label className="form-label" for="form6Example7">Additional information</label>
                </div>

        <p><b>NOTE : </b> Only COD available</p>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
            </div>
        </div>
    );
}

export default Checkout;