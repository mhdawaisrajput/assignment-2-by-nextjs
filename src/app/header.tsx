import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#f7ece9] flex justify-evenly items-center p-8">
      <div>
        <Image width={100} height={100} src="/logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-x-10 font-bold">
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">Shop</Link>
          </li>
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">About</Link>
          </li>
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">Contact</Link>
          </li>
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">Products</Link>
          </li>
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">Contact</Link>
          </li>
          <li className=" hover:text-white hover:border-b-4 hover:border-white">
            <Link href="/">Feedback</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
