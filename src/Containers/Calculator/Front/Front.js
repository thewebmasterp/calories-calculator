import React, { useState, useEffect } from 'react';

import ImperialUnits from './ImperialUnits/ImperialUnits';
import MetricUnits from './MetricUnits/MetricUnits'; 
import FrontCard from '../../../Components/UI/Flipcard/FrontCard/FrontCard';
import FrontLayout from '../../../Components/FrontLayout/FrontLayout';
import Field from '../../../Components/FrontLayout/Field/Field';
import Tabs from '../../../Components/UI/Tabs/Tabs';
import Input from '../../../Components/UI/Input/Input';
import { Route, Switch, NavLink, useLocation, Redirect} from 'react-router-dom';
import RangeActiv from '../../../Components/UI/Input/RangeActiv/RangeActiv';
import RangeGoal from '../../../Components/UI/Input/RangeGoal/RangeGoal';
import Button from '../../../Components/UI/Button/Button';
import Settings from '../../../Components/FrontLayout/Settings/Settings';
import { BsFillGearFill, BsArrowClockwise } from "react-icons/bs";

const Front = (props) => {

    const TOTALhandler = () => {
        console.log('TOTAL');

        //VALIDATE AND IF EVERYTHING IS FINE:
        
        //flip (moved in calculator.js)
        setTimeout(() => {
            props.flip(180);
        }, 500);
    }

    const SettingsHandler = () => {
        console.log('SETTINGS')
    }

    const ResetHandler = () => {
        console.log('RESET');
    }

    

    return (
        <>
            <FrontCard>
                <FrontLayout>
                    <Field whole>
                        <Tabs active={props.defs.defaultUnit}/>
                    </Field>
                    <Field label="age">
                        <Input change={(e) => props.redux.reducer.setAge(e.target.value)} type="number" guide="years" trigger={false} />
                    </Field>
                    <Field label="gender" >
                        <div className="radioContainer">
                            <Input type="radio" name="gender" id="male" guide="male" change={() => props.redux.reducer.setGender('male')} checked={props.redux.reducer.gender === 'male'} />
                        </div>
                        <div className="radioContainer">
                            <Input type="radio" name="gender" id="female" guide="female" change={() => props.redux.reducer.setGender('female')} checked={props.redux.reducer.gender === 'female'}/>
                        </div>
                    </Field>
                    {/* <Switch>
                            <Route path="/imperial" exact render={() => <ImperialUnits redux={ props.redux } />} />
                            <Route path="/metric" exact render={() => <MetricUnits redux={ props.redux } />} />
                            <Route render={props.defs.defaultUnit === "I" ? ()=>{return <ImperialUnits redux={ props.redux } />} : ()=>{return <MetricUnits redux={ props.redux } />} } />
                    </Switch>  */}
                    <Switch>
                        <Route exact path="/">
                            {props.defs.defaultUnit === 'I' ? <Redirect to="/imperial"/> : <Redirect to="/metric"/>}
                        </Route>
                        <Route path="/imperial" exact render={() => <ImperialUnits redux={ props.redux } />} />
                        <Route path="/metric" exact render={() => <MetricUnits redux={ props.redux } />} />
                    </Switch>
                    <Field label="activity">
                        <RangeActiv change={(e) => props.redux.write.setActivity(e.target.value)} />
                    </Field> 
                    <Field label="goal">
                        <RangeGoal change={(e) => props.redux.write.setGoal(e.target.value)} />
                    </Field>
                    <Switch>
                        <Route exact path="/imperial/settings" render={() => <Settings/>} />
                        <Route exact path="/metric/settings" render={() => <Settings/>} />
                        <Redirect from="*" to=".." />
                    </Switch>
                    <Field end>
                        <Button click={SettingsHandler} icon><BsFillGearFill style={{fontSize: '1.5em'}} /></Button>
                        <Button click={ResetHandler} icon><BsArrowClockwise style={{fontSize: '1.5em'}} /></Button>
                        <Button click={TOTALhandler}>total</Button>
                    </Field> 
                </FrontLayout>
            </FrontCard>
        </>
    )
}

export default Front;