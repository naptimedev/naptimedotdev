import React, { Fragment } from 'react';
import Header from './header';
import {Helmet} from 'react-helmet';

export default function Layout({ children }) {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Rest for your weary web.</title>
                </Helmet>
                <Header />
                <main>
                { children }</main>
                <footer></footer>
            </Fragment>
        )
}
