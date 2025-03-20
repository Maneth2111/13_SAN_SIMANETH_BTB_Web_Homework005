
import Image from "next/image";
import Link from "next/link"; 
import bookImg from "@/asset/book-img.png";
import cartoonImg from "@/asset/cartoon-img.png";
import cartoonIcon from "@/asset/cartoon-icon.png";
import bookIcon from "@/asset/book-icon.png";

export default function HomePage() {
  const items = [
    { id: 1, image: bookImg, icon: bookIcon, category: "Book", link: "/book" },
    { id: 2, image: cartoonImg, icon: cartoonIcon, category: "Cartoon", link: "/cartoon" },
  ];

  return (
    <>
      <div className="p-6">
        <div className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
          <h1 className="text-xl font-bold text-gray-700">Homepage</h1>
        </div>

        <div className="flex justify-around">
          {items.map((item) => (
            <Link href={item.link} key={item.id} className="rounded-lg shadow-md relative group">
              <div className="relative">
                <Image
                  src={item.image}
                  width={250}
                  height={400}
                  className="rounded-lg"
                  alt={item.category}
                />
                <Image
                  src={item.icon}
                  alt={`${item.category} Icon`}
                  className="absolute top-4 left-4"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  {item.category === "Book"
                    ? "View All Available Books"
                    : "View All Available Cartoons"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}