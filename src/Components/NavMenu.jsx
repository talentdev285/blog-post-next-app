"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  let currentPath = usePathname();

  return (
    <nav className=" py-4">
      <div className="flex items-center justify-between px-4 md:px-8 mx-auto">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="/logo white.png" alt="logo" className="h-8" />
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link
                className={`${
                  currentPath === "/" ? "text-white font-bold" : "text-gray-300"
                } hover:text-white transition duration-300`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  currentPath === "/blogs"
                    ? "text-white font-bold"
                    : "text-gray-300"
                } hover:text-white transition duration-300`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            {/* <li>
              <Link
                className={`${
                  currentPath === "/post"
                    ? "text-white font-bold"
                    : "text-gray-300"
                } hover:text-white transition duration-300`}
                href="/post"
              >
                Post
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
