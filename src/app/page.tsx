import Categories from "@/components/home/categories/categories";
import Discounts from "@/components/home/products/discounts";
import Home from "@/components/home/sectionHome/home";

export default function App() {
  return (
    <>
      <main className="main">
        <Home />
        <Discounts />
        <Categories />
      </main>
    </>
  );
}
