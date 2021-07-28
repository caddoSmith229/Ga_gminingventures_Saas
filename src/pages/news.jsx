import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import Blog from "../containers/news/blog";
import Layout from "../components/layout";
import SEO from "../components/seo";

const CorporateDirectory = ({ data }) => {
  const { title, heroImage } = data.hero.nodes[0];
  const { edges } = data.news;

  return (
    <Layout inverted>
      <SEO title="News" />
      <Hero title={title} image={heroImage} />
      <Blog data={edges} />
    </Layout>
  );
};

export const query = graphql`
  query NewsQuery($locale: String) {
    hero: allContentfulNewsPageHero(filter: { node_locale: { eq: $locale } }) {
      nodes {
        heroImage {
          file {
            url
          }
        }
        title
      }
    }
    news: allContentfulNews(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          ctaText
          ctaLink
          title
          date(formatString: "MM-DD-YYYY")
          formattedDate: date(formatString: "MMM DD, YYYY")
          content {
            raw
          }
        }
      }
    }
  }
`;

export default CorporateDirectory;
