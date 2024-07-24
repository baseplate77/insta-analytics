import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[url('/bg_image/cover_page_bg.jpg')] w-screen h-screen bg-no-repeat bg-fixed bg-cover">
      <div className="flex flex-col justify-center items-center h-[80%]">
        <div className=" flex flex-col gap-4 items-center justify-center py-16">
          <div className="font-black text-4xl text-white text-center">
            ANALYZE YOUR CURRENT INSTAGRAM REPORT
          </div>
          <div className="text-white text-xl text-center">
            {" "}
            • Dive into the details and discover the insidhts in your latest
            report •{" "}
          </div>
        </div>
        <div className="flex justify-center items-center w-full pt-16">
          <div className="bg-white/50 p-3 pl-8 rounded-full flex w-[50%] h-min min-w-[280px] backdrop-blur-lg">
            <input
              placeholder="Enter username"
              className="focus:outline-none w-full bg-transparent placeholder-black text-xl font-medium"
            />
            <Button
              variant="outline"
              className="flex items-center gap-2 border border-black/80 text-black/70 px-2 py-1 rounded-full bg-transparent hover:bg-white/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" "
                // class="lucide lucide-move-left"
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
              <p className="font-bold text-lg">Search</p>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
