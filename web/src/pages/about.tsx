import { graphql, PageProps } from "gatsby";
import { FluidObject } from "gatsby-image";
import React from "react";
import Layout from "../components/layouts/Layout";
import Img from "gatsby-image";
import Code from "../components/posts/Code";
import BlockContent from "@sanity/block-content-to-react";

interface QueryResponse extends PageProps {
  data: {
    sanityAuthor: {
      image: {
        asset: {
          fluid: FluidObject;
        };
      };
      name: string;
      _rawBio: any;
    };
  };
}

const About: React.FC<QueryResponse> = ({ data }) => {
  const { sanityAuthor } = data;
  return (
    <Layout>
      <div className="flex flex-col w-full items-center p-6">
        <div className="text-center md:text-left md:flex w-full space-6 justify-evenly items-center">
          <Img
            fluid={sanityAuthor.image.asset.fluid}
            className="w-64 h-64 shadow-2xl rounded-full"
            title={sanityAuthor.name}
            placeholderStyle={{
              filter: `blur(1.5rem)`,
            }}
          />
          <div>
            <h3 className="text-2xl">Hello, I'm {sanityAuthor.name}!</h3>
          </div>
        </div>
        <div className="px-6 py-12">
          <BlockContent
            blocks={sanityAuthor._rawBio}
            serializers={{
              types: {
                code: Code,
              },
            }}
            projectId={process.env.SANITY_PROJECT_ID}
            dataset={process.env.SANITY_DATASET}
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GetAuthorData {
    sanityAuthor {
      image {
        asset {
          fluid(maxWidth: 250) {
            ...GatsbySanityImageFluid
          }
        }
      }
      name
      _rawBio
    }
  }
`;

export default About;
