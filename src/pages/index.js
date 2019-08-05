import React from 'react';
import SCLogo from '../components/sclogo/sclogo.js'
import { Link, graphql, } from "gatsby"
import './page_styles/index.scss'
import './page_styles/bootstraplocal.scss'
import {Row, Col, Container} from 'react-bootstrap'



export default ({data}) => {
const pageData = data.allContentfulPageDefaultData;

    return (
        <Container fluid={'true'}>
            <div className={'bigNavigation'}>
                <Row noGutter={'true'}>
                <Col md={'12'}>
                    <SCLogo/>
                </Col>
                </Row>
                <Row noGutter={'true'}>
                    <Col md={'5'}>
                        <h1>TEST AREA FOR GIF</h1>
                    </Col>
                    <Col md={'7'}>
                        <Link to={pageData.edges[0].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[0].node.pageTitle}</h1></Link>
                        <Link to={pageData.edges[1].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[1].node.pageTitle}</h1></Link>
                        <Link to={pageData.edges[2].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[2].node.pageTitle}</h1></Link>
                        <Link to={pageData.edges[3].node.slug}><h1
                            className={'bigLink'}>{pageData.edges[3].node.pageTitle}</h1>
                        </Link>
                    </Col>
                </Row>
            </div>

        </Container>
    )

}
export const query = graphql`
   query getPageData {
  allContentfulPageDefaultData(sort: {fields: createdAt, order: ASC}) {
    edges {
      node {
        id
        pageTitle
        slug
      }
    }
  }
}`;

