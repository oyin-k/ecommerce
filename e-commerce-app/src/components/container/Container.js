import React from "react";

import './container.scss';

const Container = ({ children }) => (
    <div className="layout-container">
        <section className="container">{children}</section>
    </div>
);

export const withLayout = Page => props => (
    <Container>
        <Page {...props} />
    </Container>
)

export default Container;