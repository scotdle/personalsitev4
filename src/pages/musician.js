import React from 'react';
import {Link, graphql,} from "gatsby"
import './page_styles/music.scss'
import Layout from "../components/layout";
import SEO from "../components/seo"
import {Row, Col, Carousel} from 'react-bootstrap'
import Img from 'gatsby-image'


export default ({data}) => {
    const pageTitle = data.contentfulPageDefaultData.pageTitle;
    const pageHeaderText = data.contentfulPageDefaultData.pageHeaderText;
    const pageLetter = data.contentfulPageDefaultData.pageDescription.internal.content;
    const AllAlbums = data.allContentfulMusicImInto.edges.map((edge) => edge.node);


    return (
        <Layout>
            <SEO
                title={pageTitle}
                description={pageLetter}
            />

            <Row className={'titleAndQuote'}>
                <Col sm={'4'}>
                    <h1 className={'pageTitle'}>{pageTitle}</h1>
                </Col>
                <Col sm={'8'}>
                    <h1 className={'pageHeaderText'}>"{pageHeaderText}"</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={'12'} className={'containerPadding musicLetter'}>
                    <p>{pageLetter}</p>
                </Col>
            </Row>
            <Row>

                <Col sm={'12'} className={'containerPadding favoriteAlbums'}>
                    <h1 className={'sectionTitle'}>My Favorite Albums</h1>

                    <Carousel interval={null} touch={true} className={'albumCarousel'} fade={true} indicators={false}>
                        {AllAlbums.map((album, index) => {
                            return (
                                <Carousel.Item index={index}>
                                    <Row>
                                        <Col md={'5'}>
                                            <div className={'albumImage'}>
                                                <Img fluid={album.albumArt.fluid}/>
                                            </div>
                                        </Col>
                                        <Col md={'7'}>
                                            <div className={'containerDefault'}>
                                                <div className={'text-center'}>
                                                    <Carousel.Caption bsPrefix={'caption'}><h1
                                                        className={'albumTitle'}>{album.albumTitle}.</h1><h2
                                                        className={'albumDescription'}>{album.albumDescription}</h2>
                                                    </Carousel.Caption>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Carousel.Item>

                            )
                        })}
                    </Carousel>
                </Col>
            </Row>

        </Layout>

    )

}

export const query = graphql`
query getMusicData {
  contentfulPageDefaultData(slug: {eq: "musician"}) {
    pageTitle
    pageHeaderText
    pageDescription{
      internal {
        content
      }
    }
  }
  allContentfulMusicImInto {
    edges {
      node {
        albumArt {
          fluid(quality: 100) {
     ...GatsbyContentfulFluid

          }
        }
        albumLink
        albumTitle
        albumDescription
      }
    }
  }
}


 `