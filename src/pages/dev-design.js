import React from 'react';
import {graphql} from "gatsby"
import './page_styles/development_design.scss'
import Layout from "../components/layout";
import SEO from "../components/seo"
import {Row, Col, Image} from 'react-bootstrap'
import Img from 'gatsby-image'



export default ({data}) => {
    const pageTitle = data.contentfulPageDefaultData.pageTitle;
    const pageHeaderText = data.contentfulPageDefaultData.pageHeaderText;
    const AllProjects = data.allContentfulProjects.edges.map((edge) => edge.node);
    const GithubIcon = data.Github.theIcon.file.url;
    const LinkSVG = data.LinkSVG.theIcon.file.url;
    const resumeSVG = data.resumeSVG.theIcon.file.url;
    const resumeLink = data.resumeSVG.svgReference.theFile.file.url;





    return (
        <Layout>
            <SEO
                title={pageTitle}
                description={pageHeaderText}
            />
            <Row noGutters={'true'}>
                <Col md={'4'}>
                    <h1 className={'pageTitle'}>{pageTitle}</h1>
                </Col>
                <Col md={'8'}>
                    <h1 className={'pageHeaderText'}>"{pageHeaderText}"</h1>
                </Col>
            </Row>

            <h1 className={'sectionTitle'}>My Work</h1>

            {AllProjects.map((project, index) => {
                console.log(project);
                return (
                    <div className={'eachProject'} key={index}>

                        <Row>
                            <Col lg={'6'}>
                                <div className={'projectImage'}>
                                    <Img className={'imgContained'} fluid={project.projectImage.fluid}
                                         alt={project.projectImage.file.fileName}/>
                                </div>
                            </Col>
                            <Col lg={'6'}>
                                <div className={'containerDefault'} style={{backgroundColor: project.projectColor}}>
                                    <div className={'projectDescription'}
                                         style={{backgroundColor: project.projectColor}}>
                                    <div className={'projectLogoContainer'}>
                                        <img className={'projectLogo'} src={project.projectLogo.file.url}/>
                                    </div>
                                    <h1 className={'projectTitle'}>{project.projectTitle}</h1>
                                    <h2>{project.projectDescription.projectDescription}</h2>
                                        <p>links to the project:</p>

                                        <ul className={'techIcons'}>
                                        <li><a href={project.projectLink} target="_blank"><img className={'techIconSVG'}
                                                                                               src={LinkSVG}
                                                                                               alt={'github'}/></a></li>
                                        <li><a href={project.githubLink} target="_blank"><img className={'techIconSVG'}
                                                                                              src={GithubIcon} alt={'github'}/></a>
                                        </li>
                                    </ul>
                                    <p>created with:</p>
                                    <ul className={'techIcons'}>
                                        {project.techUsed.map((eachTech, index) => {
                                            return (
                                                <li><a href={eachTech.svgLink} target="_blank"><img
                                                    className={'techIconSVG'} src={eachTech.theIcon.file.url}/></a></li>
                                            )
                                        })}
                                    </ul>
                                    </div>

                                </div>
                            </Col>

                        </Row>

                    </div>
                )
            })}

            <Row>
                <Col lg={'12'}>
                    <h1 className={'sectionTitle'}>Looking for My Resume?</h1>

                    <div className={'resumeSVG'}>
                        <a href={resumeLink}><img src={resumeSVG} target="_blank"/></a>
                    </div>

                </Col>
            </Row>
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

  allContentfulProjects (sort: {fields: projectRating, order: DESC}) {
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
  file {
            fileName
          }

        }
         techUsed {
          svgLink
          theIcon {
            file {
              url
            }
          }
        }
        projectLink
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
   resumeSVG: contentfulSvgIcons(svgIconTitle: {eq: "Resume SVG"}) {
    theIcon {
      file {
        url
      }
    }
    svgReference {
      theFile {
        file {
          url
    }
  }
}
  } 
}
`