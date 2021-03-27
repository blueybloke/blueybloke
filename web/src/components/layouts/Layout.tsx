/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Img from "gatsby-image";

const Layout: React.FC = ({ children }) => {
  const { site, sanityAuthor } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      sanityAuthor {
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);

  const { siteMetadata } = site;

  return (
    <div className="bg-gradient-to-r from-gray-50 to-yellow-100 min-w-screen min-h-screen">
      <div className="flex flex-col backdrop-blur">
        <header className="flex flex-nowrap justify-between items-center h-16 p-6 overflow-hidden">
          <Link to="/" className="flex flex-nowrap items-center space-x-3">
            <Img
              fluid={sanityAuthor.image.asset.fluid}
              className="rounded-full shadow-sm w-12 h-12"
              title={siteMetadata.title}
              placeholderStyle={{
                filter: `blur(1.5rem)`,
              }}
            />
            <div>
              <h1 className="text-4xl font-courier hover:underline">
                {siteMetadata.title}
              </h1>
              <h3 className="text-sm font-light">{siteMetadata.description}</h3>
            </div>
          </Link>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
