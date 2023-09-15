import Image from "next/image";
import Link from "next/link";

//Components
import Icon from "./component/icon";

const Page = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <Image src="/logo.png" width={400} height={400} alt="cabbage" className="w-[100px] mx-auto" />
        <h4 className="text-2xl font-bold mb-2">Coming <span className="text-secondary">Soon</span></h4>
        <h6 className="font-medium mb-4">Our site is under maintenance</h6>
        <Link href="/" onClick={refreshPage} className="bg-secondary text-white py-1.5 px-4 uppercase text-sm font-semibold rounded">Retry</Link>
        <p className="mt-4 text-sm uppercase">Or</p>
        <div className="flex gap-2 items-center justify-center -ml-2">
          <Icon />
          <p className="font-medium">
            <Link href="https://wa.me/message/UAXIYNES562EN1">
              +8801611994403
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;