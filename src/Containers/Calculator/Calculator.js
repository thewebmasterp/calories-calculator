import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Calculator.scss';

import ImperialUnits from './ImperialUnits/ImperialUnits';
import MetricUnits from './MetricUnits/MetricUnits';
import FrontLayout from './../../Components/FrontLayout/FrontLayout';
import Field from './../../Components/FrontLayout/Field/Field';
import FlipCard from '../../Components/UI/Flipcard/Flipcard';
import Front from '../../Components/UI/Flipcard/Front/Front';
import Back from '../../Components/UI/Flipcard/Back/Back';
import Tabs from '../../Components/UI/Tabs/Tabs';

//soon gonna convert everything to hooks.
class Calculator extends Component {
    render() {
        const defaults = {
            defaultUnit: 'M', //type 'I' for Imperial | 'M' for Metric
            colorTheme: {
                color1: '#394264', //Calculator background
                color2: '#11A8AB', //Interactive element.
                color3: 'red', //on active
                color4: 'white', //text content
            }
        }
        return (
            <>
                <Switch>
                    <Route path="/imperial" component={ImperialUnits} />
                    <Route path="/metric" exact component={MetricUnits} />
                    <Route path="/" component={defaults.defaultUnit === "I" ? ImperialUnits : MetricUnits} />
                </Switch>
                <FlipCard>
                    <Front>
                        <FrontLayout>
                            <Field whole>
                                <Tabs />
                            </Field>
                            <Field label="just try" />
                            <Field label="p" />
                            <Field label="s" /> 
                        </FrontLayout>
                    </Front>
                    <Back>
                        <p>This is the back of our card</p>
                    </Back>
                </FlipCard>
            </>
        )
    }
} 

export default Calculator;