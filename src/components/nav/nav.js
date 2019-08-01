import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import {slide as Menu} from 'react-burger-menu';
import './navstyles.scss';
import "bootstrap/dist/css/bootstrap.min.css";

import AniLink from "gatsby-plugin-transition-link/AniLink";




export default () => (
    <StaticQuery
        query={graphql`
     query getNavData {
  allContentfulPageDefaultData {
    edges {
      node {
        pageTitle
        slug
      }
    }
    }
    contentfulSvgIcons(svgIconTitle: {eq: "sclogo_svg"}) {
    theIcon {
      file {
        url
      }
    }
  }
}`
        }
        render={data => (

            <div className={'navContainer'}>
                <Link to={'/'}><img className={'NavLogo'} alt={'logo'} src={data.contentfulSvgIcons.theIcon.file.url}/></Link>


                <Menu right
                      disableAutoFocus
                      width={'100%'}
                      burgerButtonClassName={"burgerButton"}
                      overlayClassName={"menuOverlay"}
                      menuClassName={"bigNavigation"}
                      customCrossIcon={false}>
                    <Link to={`/${data.allContentfulPageDefaultData.edges[3].node.slug}`} className={'bigLink'}
                          activeClassName={'linkActive'}><h1
                        id={data.allContentfulPageDefaultData.edges[3].node.slug}>{data.allContentfulPageDefaultData.edges[3].node.pageTitle}</h1>
                    </Link>
                    <Link to={`/${data.allContentfulPageDefaultData.edges[2].node.slug}`} className={'bigLink'}
                          activeClassName={'linkActive'}><h1
                        id={data.allContentfulPageDefaultData.edges[2].node.slug}>{data.allContentfulPageDefaultData.edges[2].node.pageTitle}</h1>
                    </Link>
                    <Link to={`/${data.allContentfulPageDefaultData.edges[1].node.slug}`} className={'bigLink'}
                          activeClassName={'linkActive'}><h1
                        id={data.allContentfulPageDefaultData.edges[1].node.slug}>{data.allContentfulPageDefaultData.edges[1].node.pageTitle}</h1>
                    </Link>
                    <Link to={`/${data.allContentfulPageDefaultData.edges[0].node.slug}`} className={'bigLink'}
                          activeClassName={'linkActive'}><h1
                        id={data.allContentfulPageDefaultData.edges[0].node.slug}>{data.allContentfulPageDefaultData.edges[0].node.pageTitle}</h1>
                    </Link>

                </Menu>
            </div>


        )}
        />
            )