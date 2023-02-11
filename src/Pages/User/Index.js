import React,{useState} from 'react';
import Navbar from '../../Components/Navbar';
import { Tomatos,Bendakays } from '../../Images';
function Index(props) {
    const [items,setItems] = useState([
        {Name:"Tomato",price:"100",Image:Tomatos},
        {Name:"Ladyfinger",price:"100",Image:Bendakays}
    ])
    const [cart,setCart] = useState([])
    const handleBuyItem = ()=>{}
    const handleAddToCart = (name,price)=>{
        const quantity = document.querySelector('.itemQuantity').value + 1
        const totalPrice =  parseInt(price) * quantity
        setCart([...cart,{Name:name,Price:price,totalQuantity:quantity,totalAmount:totalPrice}])
        console.log(cart)
    }
    return (
        <div>
            <Navbar w-90 p-3/>
            <div className='items row'>
            {
            items.map((item,index)=>{
                return (
                    <div className="card col-3 mt-4">
                        <img src={item.Image}
                        data-mdb-img={item.Image}
                        className="card-img-top w-100"
                        alt="Fissure in Sandstone" />
                        <div className="card-body">
                            <h5 className="card-title">{item.Name}</h5>
                            <p className="card-text">PRICE : {item.price} ₹</p>
                            <div>
                            <button className="btn btn-primary ms-10" onClick={handleBuyItem}>Buy</button>
                            <button type="button" className="btn btn-primary ms-5" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                            Add To Cart
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add To Cart</h5>
                                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-outline">
                                        <input type="number" id="form12" className="form-control itemQuantity" />
                                        <label className="form-label" htmlFor="form12">enter the quantity</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-mdb-dismiss="modal" onClick={()=>{handleAddToCart(item.Name,item.price)}}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
            })
            }
            </div>
        </div>
    );
}

export default Index;