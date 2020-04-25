import React, { Component } from 'react';
import './FrontLayout.scss';

class FrontLayout extends Component {
    render() {
        return (
            <section id="FrontLayer">
                {this.props.children}
            </section>
        );
    }
}

export default FrontLayout;