import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import jquery from "jquery";

import { BsShieldFillCheck } from "react-icons/bs";
import { SiPaytm, SiAmazonpay } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { FaGooglePay, FaFingerprint, FaCertificate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import thumb from "../assets/SUITCASE.png";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST
);

export default function Card() {
  const [item, setItem] = React.useState({
    name: "Bag",
    description: "Bag purchase",
    quantity: 1,
    price: 1.0,
  });

  const router = useRouter();
  const { status } = router.query;

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/stripe-checkout-session", {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  const handleChange = (event) => {
    setItem({ ...item, price: event.target.value });
  };
  const handleCrossClick = () => {
    const alert_del = document.querySelectorAll('.alert');
    alert_del.forEach((x) =>
      x.addEventListener('click', function () {
        x.parentElement.classList.add('hidden');
      })
    );
  }
  return (
    <div>
      {status && status === "success" && (
        <div
          id="alert-3"
          className="flex p-4 mb-4 bg-purple-100 rounded-lg"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-purple-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium text-purple-700">
            Payment Successful.
          </div>
          <button
            type="button"
            onClick={handleCrossClick}
            className="alert ml-auto -mx-1.5 -my-1.5 bg-purple-100 text-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 p-1.5 hover:bg-purple-200 inline-flex h-8 w-8"
            data-dismiss-target="#alert-3"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      {status && status === "cancel" && (
        <div
          id="alert-2"
          className="flex p-4 mb-4 bg-red-100 rounded-lg"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-red-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium text-red-700">
            Payment failed.
          </div>
          <button
            type="button"
            onClick={handleCrossClick}
            className="alert ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
            data-dismiss-target="#alert-2"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}

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
          <h1 className="m-2 text-4xl font-bold">Famous Bag House</h1>
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
                type="number"
                name="price"
                id="price"
                placeholder="0.00"
                onChange={handleChange}
                value={item.price}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
              <style jsx>
                {`
                  input[type="number"]::-webkit-inner-spin-button,
                  input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    margin: 0;
                  }
                `}
              </style>
            </div>
          </div>

          <div className="flex flex-row">
            <button
              onClick={createCheckOutSession}
              className="md:m-2 m-auto mt-8 bg-[#ab80b7] shadow-md shadow-[#ab80b78a]  pt-1 pb-1 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#8f4fa0] ease-linear duration-300"
            >
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
              rel="noopener noreferrer"
            >
              {" "}
              @DARKTECH
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
