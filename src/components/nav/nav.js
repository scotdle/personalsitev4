import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import './navstyles.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


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

            <div className={'NavArea'}>
                <Navbar style={{padding: '0 10px 0 10px'}} expand="lg">
                    <Navbar.Brand href="/"> <img className={'NavLogo'} src={data.contentfulSvgIcons.theIcon.file.url}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto NavLinks">

                            <Link to="/music" className={'link'} activeClassName={'linkActive'}><h1 id={'music'}>{data.allContentfulPageDefaultData.edges[2].node.pageTitle}</h1></Link>
                            <Link to="/camera" className={'link'} activeClassName={'linkActive'}><h1 id={'camera'}>{data.allContentfulPageDefaultData.edges[1].node.pageTitle}</h1></Link>
                            <Link to="/dev-design" className={'link'} activeClassName={'linkActive'}><h1 id={'dev-design'}>{data.allContentfulPageDefaultData.edges[0].node.pageTitle}</h1></Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )}
        />
            )
