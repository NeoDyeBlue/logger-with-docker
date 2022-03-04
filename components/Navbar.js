import Link from "next/link";
import Clock from "./Clock";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom py-3">
      <div className="container-xl d-flex align-items-center">
        <Link href="/">
          <a className="navbar-brand">📝🐳 LoggerWithDocker</a>
        </Link>
        {/* <Clock /> */}
      </div>
    </nav>
  );
}
