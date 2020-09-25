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
                <title>Bilelim - Sayfa bulunamad�.</title>
            </Helmet>
            <img style={img} src={Code404} alt="" />
            <p style={p}>Arad���n�z sayfa/makaleyi bulamad�k. <Link style={a} to="/">Buradan anasayfa'ya d�nerek,</Link> mevcut i�eriklerimize g�z atabilirsiniz.</p>
        </section>
    )
}

export default NotFound;
