import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-2 mt-12 mb-4 pt-4 pb-28">
      <div className=" flex justify-around ">
        <p className="text-2xl font-bold">
          Funiro. <br />
          <br />
          <br />
          <span className="font-normal text-[16px] text-[#9F9F9F] leading-none">
            400 University Drive Suite 200 <br />
            Coral <br />
            Gables, FL 33134 USA
          </span>
        </p>
        <nav>
          <ul className="flex gap-x-24 text-[#9F9F9F]">
            <li>
              <Link className="font-semibold" href="/">
                Links
              </Link>
              <ul className="pt-12 text-black font-bold">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="pt-8">
                  <Link href="/">Shop</Link>
                </li>
                <li className="pt-8">
                  <Link href="/">About</Link>
                </li>
                <li className="pt-8">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="font-semibold" href="/">
                Help
              </Link>
              <ul className="pt-12 text-black font-bold">
                <li>
                  <Link href="/">Payment Option</Link>
                </li>
                <li className="pt-8">
                  <Link href="/">Returns</Link>
                </li>
                <li className="pt-8">
                  <Link href="/">Privacy Policies</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="font-semibold" href="/">
                Newsleter
              </Link>
              <ul className="pt-12">
                <input
                  className="text-[#9F9F9F] border-b-2 border-black pr-4"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <span className="border-b-2 border-black ml-3 text-black">
                  SUBSCRIBE
                </span>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
