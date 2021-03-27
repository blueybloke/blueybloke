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
    node.asset._id,
    { maxWidth: 700 },
    {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID || "jq0d6242",
      dataset:
        process.env.GATSBY_SANITY_DATASET ||
        process.env.NODE_ENV ||
        "production",
    }
  );
  return (
    <figure>
      <Img fluid={fluidProps as FluidObject} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

export default Figure;
