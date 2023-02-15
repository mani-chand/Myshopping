import React,{useState,useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import { BsFillCartPlusFill,BsFillCartDashFill } from "react-icons/bs";
function Cart(props) {
    const [items, setItems] = useState([]);
    const [total,setTotal] = useState(0)
    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items) {
    setItems(items);
    }
    }, []);
    const handleDecQuantity=(index)=>{
        const newItems = [...items]
        newItems[index].totalQuantity-=1
        setItems(newItems)
        console.log(items)
    }
    const handleIncQuantity=(index)=>{
        const newItems = [...items]
        newItems[index].totalQuantity+=1
        setItems(newItems)
        console.log(items)
    }
    useEffect(() =>  {
        var amount = 0
        for(var i =0;i<items.length;i++){
            amount += (items[i].totalQuantity*items[i].Price)
        }
        setTotal(amount)
    }, [items]);
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className='mb-3' style={{display:"flex",justifyContent:"center"}}>Shopping Cart</h1>
            </div>
            <div>
            <header className="mb-10">
                <section className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                {items.map((item,index)=>{
                                    return (
                                        <div class="row row-cols-2 g-3">
                                <div className="col">
                                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                        <img
                                            src={item.Image}
                                            alt="Trendy Pants and Shoes"
                                            className="img-fluid rounded-start"
                                        />
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.Name}</h5>
                                            <p className="card-text">
                                            <button onClick={()=>{handleIncQuantity(index)}}><BsFillCartPlusFill size={30}/></button> 
                                            <button onClick={()=>{handleDecQuantity(index)}}><BsFillCartDashFill size={30}/></button> 
                                             {(item.totalQuantity>0)?<p className="lead">quantity:{item.totalQuantity}</p>:<p></p>}
                                             {<p>Total Amount : {item.totalQuantity*item.Price}</p>}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                                    )
                                })}
                    </div>
                            <div class="col-lg-4">
                            <div class="card">
    <div class="row-lg-12">
    <div class="col">
  <div class="card-body">
    <h3 class="card-title">Price Details</h3>
    <h6 class="card-text Lead">Price of {items.length} items = {total}</h6>
    <button type="button" class="btn btn-primary" onClick={()=>{window.location.replace('/checkout');
}}>Checkout</button>
  </div>
  </div>
  </div>
</div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            </div>
        </div>
    );
}

export default Cart;