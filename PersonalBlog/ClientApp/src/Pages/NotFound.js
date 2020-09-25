import React from 'react';
import Code404 from '../img/Code404.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {

    const section = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh"
    }

    const img = {
        display: "block",
        width: "50%",
        maxWidth:"500px",
    }

    const p = {
        marginTop:"2rem",
    }

    const a = {
        color:"red"
    }

    return (
        <section style={section}>
            <Helmet>
                <title>Bilelim - Sayfa bulunamadý.</title>
            </Helmet>
            <img style={img} src={Code404} alt="" />
            <p style={p}>Aradýðýnýz sayfa/makaleyi bulamadýk. <Link style={a} to="/">Buradan anasayfa'ya dönerek,</Link> mevcut içeriklerimize göz atabilirsiniz.</p>
        </section>
    )
}

export default NotFound;
