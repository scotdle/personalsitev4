import React from 'react';
import Layout from '../components/layout'
import SCLogo from '../components/sclogo/sclogo.js'
import { Link, graphql, } from "gatsby"
import './index.scss'


export default ({data}) => {
const pageData = data.allContentfulPageDefaultData;

    return (
       <div>
        <SCLogo/>
        <div className={'indexNavigation'}>
            <Link to={'/music'}><h1>{pageData.edges[2].node.pageTitle}</h1></Link> |
            <Link to={'/camera'}><h1>{pageData.edges[1].node.pageTitle}</h1></Link> |
            <Link to={'/dev-design'}><h1>{pageData.edges[0].node.pageTitle}</h1>
            </Link>
        </div>
       </div>
    )

}
export const query = graphql`
   query getPageData {
  allContentfulPageDefaultData {
    edges {
      node {
        id
        pageTitle
        slug
      }
    }
  }
}`

