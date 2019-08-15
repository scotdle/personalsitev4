import React from 'react';
import Helmet from 'react-helmet'
import favicon from './../assets/images/sclogo.ico'

function SEO(props) {

    return (
        <Helmet
            link={[
                {rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}`},
            ]}
            title={props.title}
            meta={[
                {name: 'title', content: props.title},
                {name: 'theme-color', content: `#add9f4`},
                {name: 'description', content: props.description}

            ]}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    title: `name this page please`,
    description: ``,
}

export default SEO;