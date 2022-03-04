import { useRouter } from "next/router";
import Link from "next/link";

export default function Tabs() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <ul className="nav nav-pills py-3 bg-white sticky-top border-bottom">
      <li className="nav-item" id="all">
        <Link href="/logs/all">
          <a className={`nav-link ${path === "/logs/all" ? "active" : null}`}>
            All
          </a>
        </Link>
      </li>
      <li className="nav-item" id="debug">
        <Link href="/logs/trace">
          <a className={`nav-link ${path === "/logs/trace" ? "active" : null}`}>
            Trace
          </a>
        </Link>
      </li>
      <li className="nav-item" id="debug">
        <Link href="/logs/debug">
          <a className={`nav-link ${path === "/logs/debug" ? "active" : null}`}>
            Debug
          </a>
        </Link>
      </li>
      <li className="nav-item" id="error">
        <Link href="/logs/error">
          <a className={`nav-link ${path === "/logs/error" ? "active" : null}`}>
            Error
          </a>
        </Link>
      </li>
      <li className="nav-item" id="fatal">
        <Link href="/logs/fatal">
          <a className={`nav-link ${path === "/logs/fatal" ? "active" : null}`}>
            Fatal
          </a>
        </Link>
      </li>
      <li className="nav-item" id="info">
        <Link href="/logs/info">
          <a className={`nav-link ${path === "/logs/info" ? "active" : null}`}>
            Info
          </a>
        </Link>
      </li>
      <li className="nav-item" id="warn">
        <Link href="/logs/warn">
          <a className={`nav-link ${path === "/logs/warn" ? "active" : null}`}>
            Warn
          </a>
        </Link>
      </li>
    </ul>
  );
}
