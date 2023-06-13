import LogoAnimate from "./logoAnimate";

export function TextSectionHome() {
  return (
    <div className="home__text">
      <LogoAnimate />
      <div className="only__text">
        <h1 style={{}} className="font-medium">
          Contruye el hogar de tus sueños
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatibus
          quae doloribus quidem voluptatem. Quisquam Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam voluptatum, voluptate,
          quibusdam, quia voluptas quod quos voluptatibus quae doloribus quidem
          voluptatem. Quisquam
        </p>
        <div className="button">
          <button className="btn__primary">Ver más</button>
        </div>
      </div>
    </div>
  );
}
