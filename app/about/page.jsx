import Image from "next/image";
import logo from "../../Assets/logo.jpg";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center text-center p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">ABOUT US</h1>
        <p className="mb-8 text-gray-600">
          Creatures Oasis, founded in 1986, provides high-quality, nutritious
          pet food made from premium ingredients. With a focus on health and
          innovation, we aim to be the top choice for pet lovers, enriching the
          bond between pets and their families.
        </p>

        <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-6 items-center justify-center">
          <div className="flex items-center justify-center w-full md:w-1/2">
            {/* Left box with logo */}

            <Link href={"https://www.creaturesoasis.com"}>
            <Image
              src={logo}
              alt="Creatures Oasis Logo"
              className="object-contain rounded-lg  transition-transform transform hover:scale-105" // Added hover effect
              width={300}
              height={200}
              priority={100}
            />
            </Link>
          </div>

          <div className="flex flex-col w-full md:w-1/2 text-left p-4 bg-white rounded-lg  transition-all duration-300 hover:shadow-xl">
            {/* Right box with company details */}
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 1986, Creatures Oasis has become a renowned brand in
              the pet food industry, dedicated to providing pets with the
              finest, nutritious meals that support their health and vitality.
              Through careful selection of ingredients and rigorous quality
              standards, we ensure each product offers essential nutrition for
              pets' well-being. Our commitment to research and development
              allows us to innovate continually, bringing new products to meet
              the ever-changing needs of pets. Driven by a vision to be the top
              choice for pet lovers, Creatures Oasis strives to enrich the
              unique bond between pets and their families, fostering a
              healthier, happier life for pets through our quality products and
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
