import React from 'react';
import '../styles/header.css'

const Header = (props) => {
    return (
        <div id="h">



            <div className="container centered img_background">
                <div className="row">
                    <div className="col col-md-offset-2 ">
                        <img src="/img/profil.jpeg" alt="logo" className="logo"/>
                        <h1>NIEUWJAER Mathias </h1>
                        <h2>Developpeur WEB</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;