import React, { Component } from 'react';
import './FrontLayout.scss';

class FrontLayout extends Component {
    state = {
        width: []
    }
      

    render() {
        return (
            <section id="Calculator">
                {this.props.children}
            </section>
        )
    }
}

export default FrontLayout;