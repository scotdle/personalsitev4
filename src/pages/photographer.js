import React from 'react';
import { Link, graphql, } from "gatsby"
import './page_styles/index.scss'
import Layout from "../components/layout";
import {Carousel, Col, Row} from "react-bootstrap";
import Img from "gatsby-image";



export default ({data}) => {
    const pageTitle = data.contentfulPageDefaultData.pageTitle;
    const pageHeaderText = data.contentfulPageDefaultData.pageHeaderText;
    const favoriteShots = data.allContentfulFavoriteShots.edges.map((edge) => edge.node);


    return (
        <Layout>
            <Row noGutters={'true'}>
                <Col sm={'4'}>
                    <h1 className={'pageTitle'}>{pageTitle}</h1>
                </Col>
                <Col sm={'8'}>
                    <h1 className={'pageHeaderText'}>"{pageHeaderText}"</h1>
                </Col>
            </Row>
            {favoriteShots.map((eachFavoritePhoto, index) => {
                return (
                    <div className={'theShot'}>
                        <Img fluid={eachFavoritePhoto.theShot.fluid}/>
                    </div>

                )

            })}
        </Layout>

    )


}

export const query = graphql`
 query PageDataAndPhotos {
    contentfulPageDefaultData(slug: {eq: "photographer"}) {
    pageTitle
    pageHeaderText
  }

  allContentfulFavoriteShots(sort: {fields: id}) {
    edges {
      node {
        theShot {
          fluid(quality: 100) {
        ...GatsbyContentfulFluid
          }
        }
        shotName
        shotDescription
      }
    }
  }
}

`