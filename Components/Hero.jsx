import Image from "next/image";
import Link from "next/link";
import hero from "../Assets/hero.jpg";
import { MdShoppingCartCheckout } from "react-icons/md";


const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto py-16 md:py-20 px-4 md:px-8 max-w-7xl">
        <div className="text-center md:text-left md:mr-12 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 to-blue-800 bg-clip-text text-transparent animate-fade-in-up">
            FIND PERFECT <br /> PET PRODUCTS
          </h1>

          <Link href="https://www.creaturesoasis.com">
            <button className="inline-flex gap-2 px-6 py-3 mt-4 bg-gradient-to-r from-yellow-500 to-blue-800 text-white font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
              SHOP FOR YOUR PETS NOW <MdShoppingCartCheckout className="text-2xl text-white-800 hover:text-blue-800" />
            </button>
          </Link>
        </div>

        <div>
          <Image
          className="rounded-xl"
            src={hero}
            alt="hero"
            width={400} // Updated width for better visual balance
            height={300} // Updated height for aspect ratio
            priority={true}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center text-gray-100 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg w-full max-w-4xl p-8 mt-12 shadow-lg animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">WHO ARE WE</h2>
        <p className="text-md leading-relaxed">
          Creatures Oasis was established in 1986, aiming to provide
          high-quality and nutritious food for pets. Since then, it has rapidly
          grown to become a trusted brand among pet owners. Using only the
          finest ingredients, Creatures Oasis ensures that pets receive the
          nutrition they need for optimal health. Our commitment to quality and
          customer satisfaction has positioned us as a leader in the pet food
          industry.
        </p>
      </div>

      <hr className="w-3/4 my-10 border-gray-300" />
    </div>
  );
};

export default Hero;
