
import React from 'react';
import { Link } from 'gatsby';
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import {Container} from 'react-bootstrap'


const  Layout = ({children}) => (
    <div>
    <Nav/>
        <div className={'mainContainerPadding'}>
            {children}

        </div>
    </div>

);


export default Layout;
