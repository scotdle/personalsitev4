import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import './sclogo.scss';

export default () => (
    <StaticQuery
        query={graphql`
     query MyQuery {
  contentfulSvgIcons(svgIconTitle: {eq: "sclogo_svg"}) {
    theIcon {
      file {
        fileName
        url
      }
    }
  }
}

    `}
        render={data => (
            <div className={'logoArea'}>
                <img className={'scLogoSVG'} src={data.contentfulSvgIcons.theIcon.file.url}/>
            </div>
        )}
    />
)