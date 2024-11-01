import Image from "next/image";
import complete from "../Assets/brands/complete.png";
import ferplast from "../Assets/brands/ferplast.png";
import happylife from "../Assets/brands/happylife.png";
import kiki from "../Assets/brands/kiki.png";
import Logo from "../Assets/brands/LOGO.png";
import marchioro from "../Assets/brands/marchioro.png";
import nutribird from "../Assets/brands/nutribird.png";
import optilife from "../Assets/brands/optilife.png";
import riga from "../Assets/brands/riga.png";
import sunoasis from "../Assets/brands/sunoasis.png";
import tropical from "../Assets/brands/tropical.png";

import Link from "next/link";

const Ourbrands = () => {
  const brands = [
    { id: 1, name: "Complete", logo: complete },
    { id: 2, name: "Ferplast", logo: ferplast },
    { id: 3, name: "Happy Life", logo: happylife },
    { id: 4, name: "Kiki", logo: kiki },
    { id: 5, name: "Creatures Oasis", logo: Logo },
    { id: 6, name: "Marchioro", logo: marchioro },
    { id: 7, name: "Nutribird", logo: nutribird },
    { id: 8, name: "Optilife", logo: optilife },
    { id: 9, name: "Riga", logo: riga },
    { id: 10, name: "Sunoasis", logo: sunoasis },
    { id: 11, name: "Tropical", logo: tropical },
  ];

  return (
    <div className="our-brands-container text-center uppercase font-bold mt-20 bg-blue-50 p-10 shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-800">Brands We Offer</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="brand-card p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={"https://creaturesoasis.com/brands/"}>
            <Image
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mx-auto mb-3 transform hover:scale-105 transition-transform duration-200"
              quality={100}
            />
            </Link>
            <p className="text-lg font-semibold text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourbrands;
