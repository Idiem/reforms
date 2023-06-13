import Image from "next/image";
import ImagesSectionHome from "./images";
import { TextSectionHome } from "./text";

export default function Home() {
  return (
    <div className="home">
      <section className="container">
        <ImagesSectionHome />
        <TextSectionHome />
      </section>
      <Image
        className="waves"
        src="wave.svg"
        width={1920}
        height={1080}
        alt="waves"
      />
    </div>
  );
}
