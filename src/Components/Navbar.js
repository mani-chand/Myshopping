import React,{useState,useEffect} from 'react';

function Navbar(props) {
    const [isLoggedIn,setLoggedIn] = useState(false)
    useEffect(() => {
        const res = localStorage.getItem('auth')
        setLoggedIn((res === 'true'))
        console.log(isLoggedIn,res)
    },[isLoggedIn])
    const handleLogout = ()=>{
        localStorage.setItem('auth',false)
        console.log(isLoggedIn)
        window.location.replace('/')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/items">My Shopping</a>
                    <button
                    class="navbar-toggler"
                    type="button"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                    </button>
                    <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    mdbCollapse
                    >
                    {!(isLoggedIn)?
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex input-group w-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="items">Home</a>
                        </li>
                    </ul>
                    :
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex input-group w-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="items">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="cart">Cart</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="cart">Order</a>
                        </li>
                    </ul>
                    }
                    </div>
                    {(isLoggedIn)?
                    <div>
                        { console.log(isLoggedIn)}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex input-group w-auto">
                        <li class="nav-item">
                        <button class="nav-link active" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                    </div>
                    :
                    <div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex input-group w-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Login</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/newUser">Signup</a>
                        </li>
                    </ul>
                    </div>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;