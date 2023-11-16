import Link from "next/link";
import React from "react";

type CTAProps = {
  className: string;
  text: string;
  link: string;
};

export default function CTAbtn({ className, text, link }: CTAProps) {
  return (
    <Link
      href={link}
      className={`${className} rounded-full text-white druk px-[52px] py-[21px]`}
    >
      {text}
    </Link>
  );
}
