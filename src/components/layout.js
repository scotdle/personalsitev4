import './layout.css';

import React from 'react';
import { Link } from 'gatsby';
import Nav from './nav/nav'

const  Layout = ({children}) => (
       <div className={'SiteContainer'}>
    <Nav/>
{children}
</div>


);


export default Layout;
