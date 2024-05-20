import Link from "next/link";
export const HomeTopBar = () => (
  <>
    <li>
      <Link className="cursor-pointer border-r mr-3" href="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="cursor-pointer border-r mr-3" href="/leadership">
        Leadership
      </Link>
    </li>

    <li>
      <Link className="cursor-pointer border-r mr-3" href="/ourProjects">
        Our Projects
      </Link>
    </li>
    <li>
      <Link className="cursor-pointer border-r" href="/donation">
        Donation / Get Involved
      </Link>
    </li>
    <li>
      <Link className="cursor-pointer border-r" href="/contactUs">
        Contact Us
      </Link>
    </li>
  </>
);
