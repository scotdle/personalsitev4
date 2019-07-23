import React from 'react';
import {graphql} from "gatsby"
import './page_styles/development_design.scss'
import Layout from "../components/layout";


export default ({data}) => {
    const pageTitleSVG = data.contentfulPageDefaultData.pageTitleImage.file.url;
    const pageTitle = data.contentfulPageDefaultData.pageTitleImage.title;
    const pageHeaderText = data.contentfulPageDefaultData.pageTitleImage.pageHeaderText;



    return (
        <Layout>
        <div>
            <h1>{"hi there"}</h1>
        </div>

        </Layout>
    )

}

export const query = graphql`
 query getProjectsandData {
  contentfulPageDefaultData(pageTitle: {eq: "Dev/Design"}) {
    pageTitleImage {
      file {
        url
      }
      title
    }
    pageHeaderText
  }
  allContentfulProjects {
    edges {
      node {
        projectTitle
        projectImage {
          file {
            url
          }
        }
        projectLink
        technologyUsed {
          file {
            url
          }
        }
      }
    }
  }
}`