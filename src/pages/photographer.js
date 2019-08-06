import React from 'react';
import { Link, graphql, } from "gatsby"
import './page_styles/photographer.scss'
import Layout from "../components/layout";
import {Col, Row} from "react-bootstrap";
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
            <Col lg={'12'} className={'columnLayout'}>

                {favoriteShots.map((eachFavoritePhoto, index) => {
                    return (
                        <div className={'theShot'}>
                            <div className={'photoName'}>
                                <h1>{eachFavoritePhoto.shotName}</h1>
                                <p>{eachFavoritePhoto.shotDescription}</p>
                            </div>
                            <Img fluid={eachFavoritePhoto.theShot.fluid}/>

                        </div>
                    )

                })}
            </Col>
        </Layout>

    )


}

export const query = graphql`
 query PageDataAndPhotos {
    contentfulPageDefaultData(slug: {eq: "photographer"}) {
    pageTitle
    pageHeaderText
  }

  allContentfulFavoriteShots(sort: {fields: photoRating, order: DESC}) {
    edges {
      node {
        theShot {
          fluid(quality: 100, maxHeight: 1000) {
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