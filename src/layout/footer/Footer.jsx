import React from 'react'
import footBan from "../../assets/footer-svg/FootBan.png"
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/Logo'
import { FacebookIcon } from '../../assets/footer-svg/FacebookIcon'
import { InstagramIcon } from '../../assets/footer-svg/InstagramIcon'
import { TwitterIcon } from '../../assets/footer-svg/TwitterIcon'

export const Footer = () => {
  return (
    <>
      <section className="container mt-16">
        <div
          className="bg-cover bg-center rounded-3xl p-25 flex items-center justify-between"
          style={{ backgroundImage: `url(${footBan})` }}
        >
          <h2 className="text-5xl font-bold text-white">
            Subscribe to <br /> our Newsletter
          </h2>

          <div className="flex mt-0 w-full max-w-lg bg-white rounded-full p-2">
            <input
              type="text"
              placeholder="Your Email Address"
              className="flex-1 px-4 outline-none"
            />
            <button className="bg-main text-white px-6 py-3 cursor-pointer rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="container mt-20 pb-10">
        <div className="grid grid-cols-3 gap-10 relative">
          <div className="flex flex-col items-end">
            <h3 className="text-[30px] font-bold mb-4">Contact Us</h3>

            <p className="text-[18px] font-semibold">Email</p>
            <p className="text-MainGrey mb-3">needhelp@Organia.com</p>

            <p className="text-[18px] font-semibold">Phone</p>
            <p className="text-MainGrey mb-3">666 888 888</p>

            <p className="text-[18px] font-semibold">Address</p>
            <p className="text-MainGrey">88 road, borklyn street, USA</p>
          </div>

          <span className="block absolute left-1/3 top-0 h-full border-l"></span>
          <span className="block absolute right-1/3 top-0 h-full border-l"></span>

          <div className="flex flex-col items-center text-center px-4">
            <Link to={"/"}> <Logo /> </Link>
            <p className="text-MainGrey font-second-family mt-2">
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing.
            </p>
            <div className="flex gap-4 mt-6">
              <a className="p-3 bg-gray-100 rounded-full">
                <FacebookIcon />
              </a>

              <a className="p-3 bg-gray-100 rounded-full">
                <InstagramIcon />
              </a>

              <a className="p-3 bg-gray-100 rounded-full">
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="text-[30px] font-bold mb-4">Utility Pages</h3>
            <ul className="text-MainGrey font-second-family leading-[270%]">
              <li>Style Guide</li>
              <li>404 Not Found</li>
              <li>Password Protected</li>
              <li>Licences</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="border-t py-4 text-center text-sm text-MainGrey">
        Copyright © <span className="font-bold">Organick</span> |
        Designed by VictorFlow Templates – Powered by Webflow
      </div>

    </>
  )
}
