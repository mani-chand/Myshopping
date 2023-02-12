import React from 'react';

function Navbar(props) {
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

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex input-group w-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="items">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="cart">Cart</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;