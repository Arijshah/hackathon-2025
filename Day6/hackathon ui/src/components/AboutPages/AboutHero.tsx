import React from 'react';
import Link from 'next/link';

// Define the type for breadcrumb links
interface BreadcrumbLink {
  href: string;
  label: string;
  active?: boolean; // Optional since not all links may be active
}

interface AboutHeroProps {
  title?: string;
  bgImage?: string;
  breadcrumbLinks: BreadcrumbLink[]; // Array of breadcrumb links
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title = "Our About",
  bgImage = "/heropic.png",
  breadcrumbLinks = [],
}) => {
  return (
    <section
      className="w-full bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label="Hero Section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Dynamic Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          {breadcrumbLinks.length > 0 ? (
            <nav
              aria-label="Breadcrumb"
              className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center"
            >
              {breadcrumbLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link href={link.href} passHref>
                    <a
                      className={`${
                        link.active
                          ? "text-[#FF9F0D]"
                          : "text-white hover:text-[#FF9F0D] transition-colors duration-300"
                      }`}
                      aria-current={link.active ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  </Link>
                  {index < breadcrumbLinks.length - 1 && <span className="text-white">/</span>}
                </React.Fragment>
              ))}
            </nav>
          ) : (
            <p className="text-white">No breadcrumbs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
