import Link from "next/link"
import Image from "next/image"
import kdu from '@/public/images/kdulogo.jpg'



export default function Header() {
    return (
      <main className="sticky w-screen bg-[#1d1a3b]">
        <nav className="justify-between py-4 px-16 flex ">
          <div className="p-2 items-center  overflow-hidden">
            <Image
              src={kdu}
              className="h-[60px] w-[60px] rounded-full"
              width={90}
              height={90}
            />
          </div>
          <ul className=" flex items-center justify-evenly">
            <li className="text-1xl px-6 text-white ">
              <Link href="#">Home</Link>
            </li>
            <li className="text-1xl px-6 text-white ">
              <Link href="#">Who we are</Link>
            </li>
            <li className="text-1xl px-6 text-white ">
              <Link href="#">About KDU-IC</Link>
            </li>
            <li className="text-1xl px-6 text-white ">
              <Link href="#">Units</Link>
            </li>
            <li className="text-1xl px-6 text-white ">
              <Link href="#">Partnership/Giving</Link>
            </li>
          </ul>
        </nav>
      </main>
    );  
};