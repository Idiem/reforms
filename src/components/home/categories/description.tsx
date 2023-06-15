"use client"
import { useInView } from "react-intersection-observer";

function Kitchen() {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className="category__description">Cada rincon de tu casa hecha a tu medida</div>
  )
}

export default Kitchen;