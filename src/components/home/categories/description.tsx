import Image from "next/image";

function Kitchen() {
  return (
    <div className="categories__description">
      <h1 className="categories__description__title">
        Cada rincon de tu casa hecha a tu medida
      </h1>
      <p className="categories__description__p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod quos exercitationem
        voluptatem quas quidem doloribus. Quisquam voluptatum, voluptate,
        quibusdam, quia voluptas quod quos exercitationem voluptatem quas quidem
        doloribus.
      </p>
      <Image
        src="https://idiem.github.io/reforms/Img/categories/working.jpg"
        className="categories__description__image"
        alt="kitchen"
        width="1200"
        height="700"
      />
    </div>
  );
}

export default Kitchen;
