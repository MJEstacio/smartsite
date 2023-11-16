import Image from "next/image";
import React from "react";
import Heading1 from "./Heading1";
import CTAbtn from "./CTAbtn";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto relative  flex justify-between gap-48 ">
      <div>
        <Image
          src={"/image.png"}
          width={500}
          height={500}
          alt="hero-Image"
          className="w-fit h-fit "
        />
      </div>
      <div className="flex flex-col justify-end py-20 ">
        <Heading1 />
        <p className="text-secondary text-[22px] max-w-xl font-light">
          Triple your sales with a pixel-perfect website. At SmartSite Studio,
          we don’t just design and write code, we build a revenue-driving
          machine for your business.
        </p>
        <div className="mt-10 flex gap-10">
          <CTAbtn
            className="bg-primaryOrange"
            text="Talk To Us"
            link="/"
          />
          <CTAbtn
            className="border border-primaryBlue"
            text="See Portfolio"
            link="/portfolio"
          />
        </div>
      </div>
    </section>
  );
}
