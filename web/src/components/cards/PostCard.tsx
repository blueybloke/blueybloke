import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { Link } from "gatsby";
import { string } from "prop-types";

interface Category {
  title: string;
  icon?: string;
}

interface Author {
  name: string;
  image: {
    asset: {
      fluid: FluidObject;
    };
  };
}

interface PostCardProps {
  title: string;
  subtitle?: string;
  image: FluidObject;
  slug: string;
  categories: Category[];
  author: Author;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  subtitle,
  image,
  slug,
  categories,
  author,
  date,
}) => {
  return (
    <Link to={`posts/${slug}`}>
      <article className="md:flex p-5 rounded-2xl shadow-xl bg-gray-50 hover:bg-opacity-80 backdrop-blur transform hover:scale-105 transition-transform">
        {/* Main image */}
        <Img
          fluid={image}
          className="rounded-2xl w-full md:min-w-max h-64"
          title={title}
          placeholderStyle={{
            filter: `blur(1.5rem)`,
          }}
        />
        {/* Details */}
        <div className="px-3 pt-3 md:px-6 space-y-3">
          {/* Title */}
          <h1 className="text-left text-xl font-bold justify-start text-gray-900">
            {title}
          </h1>
          {/* Subtitle */}
          <sub className="hidden md:visible italic">{subtitle}</sub>
          {/* Author */}
          <div className="author flex flew-row gap-3 items-center">
            <Img
              fluid={author.image.asset.fluid}
              className="rounded-full w-12 h-12"
              title={author.name}
              placeholderStyle={{
                filter: `blur(1.5rem)`,
              }}
            />
            <div className="author-label flex flex-col">
              <span className="font-bold text-gray-900 text-sm">
                {author.name}
              </span>
              <span className="font-light text-gray-600 text-sm">{date}</span>
            </div>
          </div>
          {/* Categories */}
          <div className="categories flex flex-row flex-wrap gap-1">
            {categories.map(category => {
              return (
                <div
                  key={category.title}
                  className="flex flex-row flex-nowrap bg-gray-50 bg-opacity-50 border-black border-opacity-30 border rounded-lg py-1 px-2 space-x-1 transition-colors"
                >
                  {category.icon ? (
                    <img
                      height={12}
                      width={12}
                      className="rounded-sm"
                      alt={category.title}
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${category.icon}.svg`}
                    />
                  ) : null}
                  <label className="text-xs">{category.title}</label>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
