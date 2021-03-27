import Img, { FluidObject } from "gatsby-image";
import React from "react";

interface Category {
  title: string;
  icon?: string;
}

interface Props {
  title: string;
  subtitle: string;
  date: string;
  categories: Category[];
  mainImage: FluidObject;
}
const PostHeader: React.FC<Props> = ({
  title,
  subtitle,
  date,
  categories,
  mainImage,
}) => {
  return (
    <header
      data-sal="slide-down"
      data-sal-easing="ease"
      className="flex flex-col text-center space-y-3"
    >
      <h1 data-sal-delay="600" className="text-4xl font-bold">
        {title}
      </h1>
      <h3 data-sal-delay="500" className="font-light text-xl italic">
        {subtitle}
      </h3>
      <span data-sal-delay="400" className="text-sm">
        Published {date}
      </span>
      <div className="flex flex-row self-center justify-center items-center flex-wrap max-w-sm gap-1">
        {categories.map((category: Category) => {
          return (
            <div
              key={category.title}
              className="flex flex-row flex-nowrap bg-yellow-100 bg-opacity-50 shadow-sm rounded-lg py-1 px-2 space-x-1 transition-colors"
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
      <Img
        data-sal-delay="300"
        fluid={mainImage}
        title={title}
        placeholderStyle={{
          filter: `blur(1.5rem)`,
        }}
        className="rounded-md shadow-xl"
      />
    </header>
  );
};

export default PostHeader;
