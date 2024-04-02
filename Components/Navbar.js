import style from "@/styles/navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={style.navs}>
      
      <ul>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/otherpage">
          <p>Other Page</p>
        </Link>
      </ul>
    </nav>
  );
}
