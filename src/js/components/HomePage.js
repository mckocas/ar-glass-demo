import React from 'react'
import Modal from "react-modal";
import ProductPhoto2 from "../../images/product2.png";
import ProductPhoto1 from "../../images/product1.png";
import {Link} from "react-router-dom";

Modal.setAppElement('#root');

export function HomePage (){
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentModel, setCurrentModel] = React.useState(null);
  const openTryOnModal = (model) => {
    setIsModalOpen(true);
    setCurrentModel(model);
  }

  const closeTryOnModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="home-page">
      <Link to="/product1">
        <div className="product-card">
          <img src={ProductPhoto1} alt="pr2"/>
          <div className="product-info">
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloremque.</p>
            <button className="product-button">Try on!</button>
          </div>
        </div>
      </Link>
      <Link to="/product2">
        <div className="product-card">
          <img src={ProductPhoto2} alt="pr2"/>
          <div className="product-info">
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloremque.</p>
            <button className="product-button">Try on!</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
