import Image from "next/image";

export default function ImagesSectionHome() {
  return (
    <div className="home__images">
      <Image
        src="https://idiem.github.io/reforms/kitchen/2.jpg"
        className="home__image1"
        width={1281}
        height={961}
        alt="Cocina integral"
      />
      <Image
        src="https://idiem.github.io/reforms/kitchen/3.jpg"
        className="home__image2"
        width={960}
        height={720}
        alt="Cocina integral"
      />
      <Image
        src="https://idiem.github.io/reforms/kitchen/1.jpg"
        className="home__image3"
        width={5312}
        height={2988}
        alt="Cocina integral"
      />
    </div>
  );
}
