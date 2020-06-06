import React, { useState } from 'react';

import ImperialUnits from './ImperialUnits/ImperialUnits';
import MetricUnits from './MetricUnits/MetricUnits'; 
import FrontCard from '../../../Components/UI/Flipcard/FrontCard/FrontCard';
import FrontLayout from '../../../Components/FrontLayout/FrontLayout';
import Field from '../../../Components/FrontLayout/Field/Field';
import Tabs from '../../../Components/UI/Tabs/Tabs';
import Input from '../../../Components/UI/Input/Input';
import { Route, Switch, NavLink, useLocation } from 'react-router-dom';
import RangeActiv from '../../../Components/UI/Input/RangeActiv/RangeActiv';
import RangeGoal from '../../../Components/UI/Input/RangeGoal/RangeGoal';
import Button from '../../../Components/UI/Button/Button';
import Settings from '../../../Components/FrontLayout/Settings/Settings';
import { BsFillGearFill, BsArrowClockwise } from "react-icons/bs";

const Front = (props) => {
    const [gender, changeGender] = useState(props.defs.defaultGender);
    let currentPath = useLocation().pathname;

    const TOTALhandler = () => {
        console.log('TOTAL');

        //VALIDATE AND IF EVERYTHING IS FINE:
        
        //flip (moved in calculator.js)
        setTimeout(() => {
            props.flip(180);
        }, 500)
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
        <FrontCard>
                    <FrontLayout>
                        <Field whole>
                            <Tabs active={props.defs.defaultUnit}/>
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
                                <Route path="/" component={props.defs.defaultUnit === "I" ? ImperialUnits : MetricUnits} />
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
                </FrontCard>
    )
}

export default Front;