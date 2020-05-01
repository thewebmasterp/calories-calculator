import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Calculator.scss';
import defaults from '../../defaults/defaults.scss';

import ImperialUnits from './ImperialUnits/ImperialUnits';
import MetricUnits from './MetricUnits/MetricUnits';
import FrontLayout from './../../Components/FrontLayout/FrontLayout';

import Field from './../../Components/FrontLayout/Field/Field';
import FlipCard from '../../Components/UI/Flipcard/Flipcard';
import Front from '../../Components/UI/Flipcard/Front/Front';
import Back from '../../Components/UI/Flipcard/Back/Back';
import Tabs from '../../Components/UI/Tabs/Tabs';
import Input from '../../Components/UI/Input/Input';

import RangeGoal from '../../Components/UI/Input/RangeGoal/RangeGoal';
import RangeActiv from '../../Components/UI/Input/RangeActiv/RangeActiv';

//soon gonna convert everything to hooks.
class Calculator extends Component {
    state = {
        defaults: defaults
    }
    render() {
        return (
            <>
                <FlipCard>
                    <Front>
                        <FrontLayout>
                            <Field whole>
                                <Tabs active={this.state.defaults.defaultUnit}/>
                            </Field>
                            <Field label="age">
                                <Input type="number" guide="years"/>
                            </Field>
                            <Field label="gender">
                                <div className="radioContainer">
                                    <Input type="radio" name="gender" id="male" guide="male" />
                                </div>
                                <div className="radioContainer">
                                    <Input type="radio" name="gender" id="female" guide="female" />
                                </div>
                            </Field>
                            <Switch>
                                    <Route path="/imperial" component={ImperialUnits} />
                                    <Route path="/metric" exact component={MetricUnits} />
                                    <Route path="/" component={defaults.defaultUnit === "I" ? ImperialUnits : MetricUnits} />
                            </Switch> 
                            <Field label="activity">
                                <RangeActiv />
                            </Field> 
                            <Field label="goal">
                                <RangeGoal />
                            </Field> 
                            <Field>

                            </Field> 
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