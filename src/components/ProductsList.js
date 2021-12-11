import React, { Component } from "react";
import "./ProductsList.scss";


import hoodieBack from "../img/merch/hoodie_back.jpg";


class ProductsList extends Component {
    render(){
        return(
            
        <div> 

            <section>
  <div class="about-us">
    <h2>Our products</h2>
    <p>Random text hier bla bla bla</p>
</div>
    <div class="image-wrapper">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" />
  </div>
</section>
            <ul class="cards">
  <li>
    <a href="" class="card">
      <img src={hoodieBack} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Hoodie</h3>            
            <span class="card__status">L,M,S</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src={hoodieBack} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Flask</h3>
    
            <span class="card__status">Brown,Black</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Toiletpaper extra soft</h3>        
            <span class="card__status">Extra soft</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">T-Shirt</h3>
            <span class="card__status">XL,M,L</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>    
</ul>
        </div>
        )
    }
}

export default ProductsList