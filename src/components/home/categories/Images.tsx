"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/models/home/categories";

export default function ImagesCategories() {
  return (
    <div className="category__images">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 0, x: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.2 },
          }}
          viewport={{ once: true, amount: index === 0 ? 0.7 : 0.9 }}
          className={`category__image__${category.id} category__image`}
        >
          <div className="category__description">
            <h1 className="category__title">{category.name}</h1>
          </div>
          <Image
            className="image"
            src={`${category.image}`}
            priority
            alt={"Primera"}
            width="1200"
            height="700"
          />
        </motion.div>
      ))}
    </div>
  );
}
