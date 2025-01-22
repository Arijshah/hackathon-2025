import React, { FC } from 'react';
import Link from 'next/link';

interface BlogHeroProps {
  title?: string;
  backgroundImage?: string; // Allows dynamic background image
  breadcrumbs?: { label: string; href: string }[]; // Breadcrumb navigation
}

const BlogHero: FC<BlogHeroProps> = ({
  title = 'Blog List',
  backgroundImage = '/heropic.png',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ],
}) => {
  return (
    <section
      className={`w-full bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6"
            aria-label={title}
          >
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="breadcrumb"
            className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center"
          >
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <Link
                  href={breadcrumb.href}
                  className={`${
                    index === breadcrumbs.length - 1
                      ? 'text-[#FF9F0D]'
                      : 'text-white hover:text-[#FF9F0D] transition-colors duration-300'
                  }`}
                  aria-current={
                    index === breadcrumbs.length - 1 ? 'page' : undefined
                  }
                >
                  {breadcrumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
