import React, { Component } from 'react';
import Input from '../Input';
import './RangeOverlay.scss';

class RangeOverlay extends Component {
    state = {
        ratios: [70, 15, 15],
        defValue: 0,
        active: 'one',
        thumbPos: 0,
        thumbWidth: 20,
    }
    changeHandler = (a) => {
        let caller = a.target;
        this.setState({thumbWidth: caller.value*0.65})
        if (caller.value < this.state.ratios[0] / 2) {
            this.setState({active: 'one'});

            //0-31
            //0-32
            this.setState({thumbPos: caller.value * 2})
        } else if (caller.value <  this.state.ratios[0] / 2 + this.state.ratios[1] / 2) {
            this.setState({active: 'two'});
            this.setState({thumbPos: 75});

        } else if (caller.value <  this.state.ratios[0] / 2 + this.state.ratios[1] / 2 +  this.state.ratios[2] / 2) {
            this.setState({active: 'three'});
            this.setState({thumbPos: 90});
        }
    }
    render() {
        return (
            <>          
                {/* <div className="overlay2" style={{left: `${this.state.thumbPos}px`}} /> */}
                <div className="overlay" style={{left: `${this.state.thumbPos}%`}} />
                <Input onchange={(a) => this.changeHandler(a)} type="range" guides={{ //always the sum must be 100
                    one: this.state.ratios[0],
                    two: this.state.ratios[1],
                    three: this.state.ratios[2],
                }} active={this.state.active} min="0" max="50" value={this.state.defValue} customThumb='true'/>
                <style dangerouslySetInnerHTML={{__html: `
                    input.customThumb::-webkit-slider-thumb { width: ${this.state.thumbWidth}% !important; }
                `}} />
            </>
        )    
    }
}

export default RangeOverlay;