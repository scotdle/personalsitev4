import React from 'react';
import SCLogo from '../components/sclogo/sclogo.js'
import SEO from "../components/seo"

import {Link, graphql} from "gatsby"
import Img from 'gatsby-image'
import './page_styles/index.scss'
import {Row, Col, Container} from 'react-bootstrap'


export default ({data}) => {
    const pageData = data.allContentfulPageDefaultData;

    return (
        <Container fluid={'true'}>
            <SEO
                title={'Scott "Scooter" Caudle'}
                description={'Personal site of Scott Caudle.. a musician, photographer, and developer. you can just call him "scooter".'}
            />
            <div className={'bigNavigation'}>
                <Row noGutters={'true'}>
                    <Col lg={'12'}>
                        <SCLogo/>
                    </Col>
                </Row>
                <Row noGutters={'true'}>
                    <Col lg={'5 bioContainer'}>
                        <Img className={'bioPic'} fixed={pageData.edges[4].node.pageTitleImage.fixed}/>
                        <div className={'pageHeaderText'}>
                            <h2>{pageData.edges[4].node.pageHeaderText}</h2>
                        </div>
                        <div className={'aboutMeText'}>
                            <p>{pageData.edges[4].node.pageDescription.pageDescription}</p>
                        </div>
                        <Link to={pageData.edges[3].node.slug}><h1
                            className={'contactLink'}>{pageData.edges[3].node.pageTitle}</h1>
                        </Link>
                    </Col>
                    <Col lg={'7'}>
                        <Link to={pageData.edges[0].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[0].node.pageTitle}</h1></Link>
                        <Link to={pageData.edges[1].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[1].node.pageTitle}</h1></Link>
                        <Link to={pageData.edges[2].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[2].node.pageTitle}</h1></Link>
                    </Col>
                </Row>

            </div>

        </Container>
    )

}
export const query = graphql`
   query getIndexData {
  allContentfulPageDefaultData(sort: {fields: createdAt, order: ASC}) {
    edges {
      node {
        id
        pageTitle
        pageHeaderText
        pageDescription {
          pageDescription
        }
        slug
        pageTitleImage {
          fixed(width: 125, height: 125) {
         ...GatsbyContentfulFixed
         }
        }
      }
    }
  }
}`


