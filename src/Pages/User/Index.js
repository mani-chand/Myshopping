import React,{useState,useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import { Tomatos,Bendakays } from '../../Images';
function Index(props) {
    const [items,setItems] = useState([
        {Name:"Tomato",price:"100",Image:Tomatos,isSelected:false},
        {Name:"Ladyfinger",price:"100",Image:Bendakays,isSelected:false}
    ])
    const [cart,setCart] = useState([])
    const handleBuyItem = ()=>{}
    useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    }, [cart]);
    const handleAddToCart = (name,price,image,index)=>{
        setCart([...cart,{Name:name,Price:price,Image:image,totalQuantity:1,isSelected:true}])
        console.log(cart.length)
        const newItems = [...items]
        newItems[index].isSelected=true
        setItems(newItems)
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
                            {(item.isSelected)?
                            <button type="button" disabled className="btn btn-primary ms-5" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                            Added To Cart
                            </button>
                            :
                            <button type="button" className="btn btn-primary ms-5" onClick={()=>{handleAddToCart(item.Name,item.price,item.Image,index)}} data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                            Add To Cart
                            </button>
                            }
                        </div>
                    </div>
                    </div>
                )})}
            </div>
        </div>
    );
}

export default Index;