import React, { Component } from "react";
import Footer from "../components/Footer";


import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import ProductDetailContent from "../components/ProductDetailContent";

class ProductsDetail extends Component{
    render(){
        return (
            <>
            <Helmet>
            <title>Products</title>
            </Helmet>
            <Navbar />
            <ProductDetailContent />
            <Footer />
        </>
        )
    }
}

export default ProductsDetail