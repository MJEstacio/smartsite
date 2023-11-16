import Hero from "./ui/Hero";
import OverlayEllipse from "./ui/OverlayEllipse";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between  bg-additional overflow-x-hidden ">
      <OverlayEllipse className="bg-primaryBlue -top-56 left-48" />
      <OverlayEllipse className="bg-[#6D6F84] bottom-0 -right-1/4 " />
      <Hero />
    </main>
  );
}
