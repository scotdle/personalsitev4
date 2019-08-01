import React from 'react';
import {graphql} from "gatsby"
import './page_styles/development_design.scss'
import Layout from "../components/layout";
import {Row, Col} from 'react-bootstrap'
import Img from 'gatsby-image'



export default ({data}) => {
    const pageTitle = data.contentfulPageDefaultData.pageTitle;

    const pageHeaderText = data.contentfulPageDefaultData.pageHeaderText;
    const AllProjects = data.allContentfulProjects.edges.map((edge) => edge.node);
    const GithubIcon = data.Github.theIcon.file.url;
    const LinkSVG = data.LinkSVG.theIcon.file.url;



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
            {AllProjects.map((project, index) => {
                console.log(project);
                return (
                    <div className={'eachProject'} key={index}>

                        <Row>
                            <Col lg={'6'}>
                                <div className={'projectImage'}>
                                    <Img className={'imgContained'} fluid={project.projectImage.fluid}/>
                                </div>
                            </Col>
                            <Col lg={'6'}>
                                <div className={'containerDefault projectDescription'}
                                     style={{backgroundColor: project.projectColor}}>
                                    <div className={'projectLogoContainer'}>
                                        <img className={'projectLogo'} src={project.projectLogo.file.url}/>
                                    </div>
                                    <h1 className={'projectTitle'}>{project.projectTitle}</h1>
                                    <h2>{project.projectDescription.projectDescription}</h2>
                                    <ul className={'techIcons'}>
                                        <li><a href={project.projectLink}><img className={'techIconSVG'} src={LinkSVG}
                                                                               alt={'github'}/></a></li>
                                        <li><a href={project.githubLink}> <img className={'techIconSVG'}
                                                                               src={GithubIcon} alt={'github'}/></a>
                                        </li>
                                    </ul>
                                    <p>created with:</p>
                                    <ul className={'techIcons'}>
                                        {project.technologyUsed.map((eachTech, index) => {
                                            return (
                                                <li key={index}><img className={'techIconSVG'} src={eachTech.file.url}/>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Col>
                        </Row>


                        <Row noGutters={'true'}>

                            <Col sm={'12'}>

                            </Col>
                        </Row>
                    </div>
                )
            })}

        </Layout>
    )

}

export const query = graphql`
 query getProjectsandData {
  contentfulPageDefaultData(slug: {eq: "dev-design"}) {
    pageTitle
    pageHeaderText
    pageTitleImage {
      file {
        url
      }
      title
    }
  }
  allContentfulProjects {
    edges {
      node {
        projectTitle
        projectColor
        projectDescription {
          projectDescription
        }
        projectLogo {
          file {
            url
          }
        }
        projectImage {
          fluid(quality:100) {
        ...GatsbyContentfulFluid
          }
  

        }
        projectLink
        technologyUsed {
          file {
            url
          }
        }
        githubLink
      }
    }
  }
  Github: contentfulSvgIcons(svgIconTitle: {eq: "Github"}) {
    theIcon {
      file {
        url
      }
    }
  }
  LinkSVG: contentfulSvgIcons(svgIconTitle: {eq: "Link SVG"}) {
    theIcon {
      file {
        url
      }
    }
  }
}
`