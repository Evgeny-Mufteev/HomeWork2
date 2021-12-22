import React from "react";
// import blackdressjpg from "../image/productCard/black-dress.jpg";
// import blackdressweb from "../image/productCard/black-dress.webp";

// Типизация для пропсов у компонентна ProductCardPropsType
type ProductCardPropsType = {
  productCardTitle: string;
  productCardPrice: number;
  productCardImage: {
    jpg: string;
    webp: string;
  };
};

const ProductCard: React.FC<ProductCardPropsType> = (props) => {
  // Деструкторизация пропсов
  const {
    productCardTitle,
    productCardPrice = "Нет информации",
    productCardImage: { jpg, webp },
  } = props;

  return (
    <div className="product-card">
      <div className="product-card__inner">
        <div className="product-card__image">
          <a href="##" className="product-card__link">
            <picture>
              <source srcSet={webp} type="image/webp" />
              <img src={jpg} alt="Черное платье" />
            </picture>
          </a>
        </div>

        <div className="product-card__action">
          <a href="##" className="product-card__fast-view">
            Быстрый просмотр
          </a>
          <a href="##" className="product-card__add-to-cart">
            В корзину
          </a>
        </div>
      </div>
      <div className="product-card__info">
        <div className="product-card__stars">
          <span className="active" />
          <span className="active" />
          <span className="active" />
          <span className="active" />
          <span />
        </div>
        <h3 className="product-card__title">{productCardTitle}</h3>
        <div className="product-card__price">&#8381; {productCardPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
