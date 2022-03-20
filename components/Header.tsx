import React, { useContext } from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-10 sm:px-6">
        <div className="flex items-center justify-between py-10 md:justify-start md:space-x-10">
          <Link href="/">
            <span className="flex cursor-pointer justify-start text-2xl font-bold text-white lg:w-0 lg:flex-1">
              <div className="link-underline">George Albu</div>
            </span>
          </Link>

          <div className="flex justify-center lg:w-0 lg:flex-1">
            <Link href="/blog">
              <span className="link-underline mt-2 ml-10 cursor-pointer align-middle font-medium text-white md:float-right">
                Project
              </span>
            </Link>
            <Link href="/blog">
              <span className="link-underline mt-2 ml-10 cursor-pointer align-middle font-medium text-white md:float-right">
                Technologies
              </span>
            </Link>
            <Link href="/blog">
              <span className="link-underline mt-2 ml-10 cursor-pointer align-middle font-medium text-white md:float-right">
                Blog
              </span>
            </Link>
            <Link href="/blog">
              <span className="link-underline mt-2 ml-10 cursor-pointer align-middle font-medium text-white md:float-right">
                About
              </span>
            </Link>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="/blog"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
