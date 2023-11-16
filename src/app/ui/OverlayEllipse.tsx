import React from "react";

type OverlayProps = {
  className?: string;
};

export default function OverlayEllipse({ className }: OverlayProps) {
  return (
    <span
      className={`w-[720px] h-[500px] absolute rounded-full bg-opacity-50 blur-3xl ${className}`}
    ></span>
  );
}
