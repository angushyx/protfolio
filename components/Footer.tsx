/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { FaGithub, FaMedium } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" bg-[#112A46]">
      <div className="container text-white">
        <div className="border-b-2 border-white pt-8 pb-3 md:flex md:justify-between">
          <div>
            <h2 className="mb-2 text-3xl">Let's Connect</h2>
            <p className="mb-2 text-lg">
              Visits: <span>瀏覽頁面人數</span>
            </p>
          </div>
          <ul className="flex gap-4 text-3xl md:items-center">
            <Link href="https://github.com/angushyx">
              <li className="hover:cursor-pointer hover:text-gray-600">
                <FaGithub />
              </li>
            </Link>
            <Link href="https://medium.com/@sickmi14798">
              <li className="hover:cursor-pointer hover:text-gray-600">
                <FaMedium />
              </li>
            </Link>
          </ul>
        </div>
        <ul className="pb-10 pt-3">
          <li>Report</li>
          <li>Feedback</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className=" bg-[#707f90] py-4">
        <div className="container flex justify-between">
          <div>© 2022 angushyx. All rights reserved.</div>
          <div className="flex gap-5">
            <div>Made with 💖 by Me! </div>
            <div>v1.0.0</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
