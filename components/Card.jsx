import Image from "next/image";
import thumb from "../assets/SUITCASE.png";
import { BsShieldFillCheck } from "react-icons/bs";
import { SiPaytm, SiAmazonpay } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { FaGooglePay, FaFingerprint, FaCertificate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Card_temp_1({ toggle, settoggle }) {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white shadow-lg flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#ab80b7] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>NEW</h1>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src={thumb}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#ab80b7]">
          Payment Portal
        </p>
        <h1 className="m-2 text-4xl font-bold">
          Famous Bag House
        </h1>
        <div className="m-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Amount?
          </label>
          <div className="relative mt-1 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">₹</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="flex flex-row">
          <button className="md:m-2 m-auto mt-8 bg-[#ab80b7] shadow-md shadow-[#ab80b78a]  pt-1 pb-1 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#8f4fa0] ease-linear duration-300">
            <FaStripe size={30} color="#fff" />
            {/* <h1 className="text-white text-md font-semibold pl-2">
              Pay
            </h1> */}
          </button>
          <button className="md:m-2 m-auto mt-8 bg-[#ab80b7] shadow-md shadow-[#ab80b78a]  pt-1 pb-1 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#8f4fa0] ease-linear duration-300">
            <FaGooglePay size={30} color="#fff" />
            {/* <h1 className="text-white text-md font-semibold pl-2">
              Pay
            </h1> */}
          </button>
          <button className="md:m-2 m-auto mt-8 bg-[#ab80b7] shadow-md shadow-[#ab80b78a]  pt-1 pb-1 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#8f4fa0] ease-linear duration-300">
            <SiPaytm size={30} color="#fff" />
            {/* <h1 className="text-white text-md font-semibold pl-2">
              Pay
            </h1> */}
          </button>
          <button className="md:m-2 m-auto mt-8 bg-[#ab80b7] shadow-md shadow-[#ab80b78a]  pt-1 pb-1 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#8f4fa0] ease-linear duration-300">
            <SiAmazonpay size={30} color="#fff" />
            {/* <h1 className="text-white text-md font-semibold pl-2">
              Pay
            </h1> */}
          </button>
        </div>
        <div className="pt-2 flex flex-row justify-between flex-wrap">
          <div className="flex flex-row items-center m-2">
            <BsShieldFillCheck size={20} color="#61DBFB" />
            <h1 className="pl-1">Secured</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <FaLock size={20} color="#376076" />
            <h1 className="pl-1">Encrypted</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <FaCertificate size={20} color="#75ba75" />
            <h1 className="pl-1">3DS</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <FaFingerprint size={20} color="#da9a7e" />
            <h1 className="pl-1">Authenticated</h1>
          </div>
        </div>
        <h3 className="text-sm m-2 font-medium text-gray-300">
          Powered by
          <a
          href="https://www.instagram.com/sajjadshaikh.io/"
          target="_blank"
          className="hover:text-[#ab80b7]"
          rel="noopener noreferrer"> @DARKTECH</a>
        </h3>
      </div>
    </div>
  );
}
