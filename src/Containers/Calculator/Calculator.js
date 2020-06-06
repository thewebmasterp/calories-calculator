import React, { useState } from 'react';
import { Route, Switch, NavLink, useLocation } from 'react-router-dom';
import './Calculator.scss';
import defaults from '../../defaults/defaults.scss';

import ImperialUnits from './ImperialUnits/ImperialUnits';
import MetricUnits from './MetricUnits/MetricUnits';
import FrontLayout from './../../Components/FrontLayout/FrontLayout';
import Settings from '../../Components/Settings/Settings';

import Field from './../../Components/FrontLayout/Field/Field';
import FlipCard from '../../Components/UI/Flipcard/Flipcard';
import Front from '../../Components/UI/Flipcard/Front/Front';
import Back from '../../Components/UI/Flipcard/Back/Back';
import Tabs from '../../Components/UI/Tabs/Tabs';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';

import RangeGoal from '../../Components/UI/Input/RangeGoal/RangeGoal';
import RangeActiv from '../../Components/UI/Input/RangeActiv/RangeActiv';

import { BsFillGearFill, BsArrowClockwise } from "react-icons/bs";


const Calculator = () => {
    const [gender, changeGender] = useState(defaults.defaultGender);
    const [flipCardDeg, changeFCDeg] = useState(0);
    let currentPath = useLocation().pathname;

    const TOTALhandler = () => {
        console.log('TOTAL');

        //VALIDATE AND IF EVERYTHING IS FINE:
        
        changeFCDeg(180);

    }
    let [num, toggleNum] = useState(0);
    const SettingsHandler = () => {
        if (num%2 === 0) {
            currentPath += 'settings';
        } else {
            currentPath += ''
        }
        toggleNum(num+1);

        console.log(currentPath);
    }
    const ResetHandler = () => {
        console.log('RESET');
    }

    return (
        <>
            <FlipCard flip={flipCardDeg}>
                <Front>
                    <FrontLayout>
                        <Field whole>
                            <Tabs active={defaults.defaultUnit}/>
                        </Field>
                        <Field label="age">
                            <Input type="number" guide="years"/>
                        </Field>
                        <Field label="gender" hover={''} >
                            <div className="radioContainer">
                                <Input type="radio" name="gender" id="male" guide="male" change={() => changeGender('M')} checked={gender === 'M'}/>
                            </div>
                            <div className="radioContainer">
                                <Input type="radio" name="gender" id="female" guide="female" change={() => changeGender('F')} checked={gender === 'F'}/>
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
                        <Switch>
                                <Route path="/imperial/settings" component={Settings} />
                                <Route path="/metric/settings" exact component={Settings} />
                                <Route path="/settings" component={Settings} />
                        </Switch>
                        <Field end>
                            <NavLink to={currentPath}>
                                <Button click={SettingsHandler} icon noRipple><BsFillGearFill style={{fontSize: '1.5em'}} /></Button>
                            </NavLink>
                            <Button click={ResetHandler} icon><BsArrowClockwise style={{fontSize: '1.5em'}} /></Button>
                            <Button click={TOTALhandler}>total</Button>
                        </Field> 
                    </FrontLayout>
                </Front>
                <Back>
                    <p>This is the back of our card</p>
                </Back>
            </FlipCard>
        </>
    );
} 

export default Calculator;

