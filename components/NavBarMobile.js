import Link from "next/link";

const NavBarMobile = ({ open }) => {
  return (
    <div
      className="absolute z-50 top-20 right-0 font-bold bg-background w-2/5 rounded-b-3xl p-2 text-center"
      style={{ display: open ? "block" : "none" }}
    >
      <Link href="/">
        <div className="mb-4">Home</div>
      </Link>

      <Link href="/nosotros">
        <div className="mb-4">Nosotros</div>
      </Link>

      <Link href="/contacto">
        <div className="mb-4">Contacto</div>
      </Link>
    </div>
  );
}

export default NavBarMobile