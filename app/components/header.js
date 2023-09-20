import Link from "next/link"
import Image from "next/image"
import kdu from '@/public/images/kduic+.png'



export default function Header() {
    return (
      <main className="bg-[#1d1a3b] max-h-min">
        <nav className="justify-between py-4 px-16 flex ">
          <div className="p-2 items-center relative overflow-hidden">
            <Image
              src={kdu}
              className="h-[60px] w-[60px] rounded-full bg-white"
              alt=""
              width={60}
              height={60}
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