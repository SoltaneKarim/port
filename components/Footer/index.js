import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-12 p-2 laptop:p-0 text-center">
        <div>
          <h1 className="text-5xl text-bold text-center">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold ">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:text-lg p-2 laptop:p-0 text-center">
      Don't walk away with empty hands... I highly recommand this radio for you!{" "}
        <Link  href="https://sultanradio.netlify.app/" >
          <a className="underline underline-offset-1" id="link">Sultan Radio </a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
