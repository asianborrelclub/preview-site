import React, { Component } from "react";
import Footer from "../components/Footer";

import OrderList from "../components/OrderList";

import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class OrderDetail extends Component{
    render(){
        return (
            <>
            <Helmet>
            <title>My product list</title>
            </Helmet>
            <Navbar />
            <OrderList />
            <Footer />
        </>
        )
    }
}

export default OrderDetail