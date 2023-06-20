import Product from "./product";

export default function Discounts() {
  return (
    <div className="discounts">
      <div className="container">
        <h2 className="discounts__title">
          Conoce nuestros productos destacados en descuentos
        </h2>
        <div className="discounts__products">
          <Product
            image="/Img/griferias/1.jpg"
            title="Griferia - modelo 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            price={100000}
          />
          <Product
            image="/Img/muebles de baño/1.webp"
            title="Mueble de baño - modelo 1"
            description="Lorem ipsum dolor Quisquam, voluptatum."
            price={100000}
          />
          <Product
            image="/Img/mueble espejo/1.webp"
            title="Griferia - modelo 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            price={100000}
          />
          <Product
            image="/Kitchen/3.jpg"
            title="Griferia - modelo 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            price={100000}
          />
        </div>
      </div>
    </div>
  );
}
