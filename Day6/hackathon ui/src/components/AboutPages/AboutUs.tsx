import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Aboutus({
  mainTitle = "Food is an important part of a balanced Diet",
  mainDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
  whyChooseUsTitle = "Why Choose Us",
  whyChooseUsDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
  cardData = [
    {
      imgSrc: "/Student.png",
      title: "BEST CHEF",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat",
    },
    {
      imgSrc: "/Coffee.png",
      title: "120 Item food",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat",
    },
    {
      imgSrc: "/man.png",
      title: "Clean Environment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat",
    },
  ],
}) {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* First Section: Content and Images */}
      <section className="body-font">
        <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side images */}
            <div className="lg:w-1/2 w-full flex flex-col sm:flex-row gap-6">
              {/* Large image */}
              <div className="w-full sm:w-1/2">
                <div className="relative h-[536px] w-full">
                  <Image
                    className="rounded-xl object-cover shadow-md"
                    alt="Tacos with vegetables"
                    src="/aboutus.png"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
              {/* Two smaller images */}
              <div className="w-full sm:w-1/2 flex flex-col gap-6">
                <div className="relative h-[271px] w-full">
                  <Image
                    className="rounded-xl object-cover shadow-md"
                    alt="Fried food with dipping sauce"
                    src="/about4.png"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative h-[271px] w-full">
                  <Image
                    className="rounded-xl object-cover shadow-md"
                    alt="Fresh salad"
                    src="/about3.png"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Text Content and Buttons */}
            <div className="lg:w-1/2 w-full space-y-8 pt-4 lg:pt-12">
              <div className="space-y-2">
                <h2 className="text-base md:text-lg text-yellow-400 italic">
                  About us <span className="inline-block w-12 h-[1px] bg-yellow-400 ml-2 align-middle"></span>
                </h2>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  {mainTitle}
                </h1>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{mainDescription}</p>
              <div className="flex flex-wrap gap-6">
                <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-6 h-auto text-base font-medium">
                  Show More
                </Button>
                <Button className="text-gray-800 hover:bg-orange-400 hover:text-white px-6 h-auto text-base font-medium">
                  <IoPlayOutline className="mr-2 text-2xl" />
                  Watch video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-black text-3xl sm:text-4xl font-bold mb-6">{whyChooseUsTitle}</h2>
            <p className="text-base sm:text-lg text-gray-600">{whyChooseUsDescription}</p>
          </div>
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden">
            <Image
              className="object-cover"
              alt="Restaurant ambiance"
              src="/about.png"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-24 h-24 mb-6">
                  <Image
                    src={card.imgSrc}
                    fill
                    alt={card.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-black text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
