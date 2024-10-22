import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div>
        <Image src="/main.jpg" alt="home" width={1440} height={812.53} />
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-2xl pt-10 pb-1">Browser The Range</p>
      </div>
      <div className="flex justify-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex justify-center gap-x-4 pt-10 ">
        <Image width={381} height={480} src="/1.png" alt="first" />
        <Image width={381} height={480} src="/2.png" alt="second" />
        <Image width={381} height={480} src="/3.png" alt="third" />
      </div>
      <div className="flex justify-center gap-x-96 font-bold pb-10">
        <p>Dining</p>
        <p>Living</p>
        <p>Bedroom</p>
      </div>
    </main>
  );
}