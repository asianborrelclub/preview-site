import React, { Component } from "react";
import Footer from "../components/Footer";
import ProductPageContent from "../components/ProductsList";

import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class Products extends Component{
    render(){
        return (
            <>
            <Helmet>
            <title>Products</title>
            </Helmet>
            <Navbar />
            <ProductPageContent />
            <Footer />
        </>
        )
    }
}

export default Products