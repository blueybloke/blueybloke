import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

interface Props {
  node: any;
}

const Figure: React.FC<Props> = ({ node }) => {
  if (node.asset.mimeType === "image/gif") {
    return (
      <figure>
        <img src={node.asset.url} alt={node.alt} />
        <figcaption>{node.caption}</figcaption>
      </figure>
    );
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 700 },
    {
      projectId: "jq0d6242",
      dataset: process.env.GATSBY_SANITY_DATASET || "production",
    }
  );
  return (
    <figure className="rounded-lg shadow-md">
      <Img fluid={fluidProps as FluidObject} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

export default Figure;
