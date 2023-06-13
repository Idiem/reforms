import Image from "next/image";

export default function Category(props: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="category">
      <div className="category__image">
        <Image src={props.image} alt={props.title} layout="fill" />
      </div>
      <div className="category__title">
        <h3>{props.title}</h3>
      </div>
      <div className="category__description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
