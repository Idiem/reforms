import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact">
          <h2 className="contact__title">Contact</h2>
          <p>Whatsapp: +55 11 9 9999-9999</p>
          <p>Phone: +55 11 9999-9999</p>
          <p>Email: prueba@gmail.com</p>
        </div>
        <div className="contact">
          <h2 className="contact__title">Contactanos</h2>
          <div>
            <Image
              width={512}
              height={512}
              className="icon"
              src={"/icons/whatsapp.svg"}
              alt="icon whatsapp"
            />
            <p>+55 11 9 9999-9999</p>
          </div>
          <div>
            <Image
              width={512}
              height={512}
              className="icon"
              src={"/icons/whatsapp.svg"}
              alt="icon whatsapp"
            />
            <p>+55 11 9999-9999</p>
          </div>
          <p>Email: prueba@gmail.com</p>
        </div>
        <div className="contact">
          <h2 className="contact__title">Contact</h2>
          <p>Whatsapp: +55 11 9 9999-9999</p>
          <p>Phone: +55 11 9999-9999</p>
          <p>Email: prueba@gmail.com</p>
        </div>
        <div className="footer_rigths">
          Derechos reservados @Muebles proyectos y reformas S.A.S.
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
