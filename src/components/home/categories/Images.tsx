import Image from "next/image";

export default function ImagesCategories() {
  return (
    <div className="category__images">
      <Image className="category__image__1" src={"/kitchen/1.jpg"} alt={"Primera"} width="1200" height="700"  />
      <Image className="category__image__2" src={"/kitchen/1.jpg"} alt={"Primera"} width="1200" height="700"  />
      <Image className="category__image__3" src={"/kitchen/1.jpg"} alt={"Primera"} width="1200" height="700"  />
      <Image className="category__image__4" src={"/kitchen/1.jpg"} alt={"Primera"} width="1200" height="700"  />
      <Image className="category__image__5" src={"/kitchen/1.jpg"} alt={"Primera"} width="1200" height="700"  />
      <Image className="category__image__6" src={"/kitchen/1.jpg"} alt={"Primera"} width="1200" height="700"  />
    </div>
  );
}
