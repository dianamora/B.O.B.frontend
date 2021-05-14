import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        B.O.B. <i class="fas fa-beer"></i>
                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
