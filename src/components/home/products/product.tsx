"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Product(props: {
  image: string;
  title: string;
  description: string;
  price: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.4 },
      }}
      viewport={{ once: true, amount: 0.9 }}
      className="product"
    >
      <h1>{props.title}</h1>
      <Image
        src={props.image}
        className="image__product"
        alt={props.title}
        width={1200}
        height={700}
      />
      <p className="product__description">{props.description}</p>
      <p className="product__price">
        precio:&nbsp;
        <span>
          {props.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </span>
      </p>
    </motion.div>
  );
}
