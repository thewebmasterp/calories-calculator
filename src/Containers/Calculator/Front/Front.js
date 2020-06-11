import React, { useState, useEffect } from 'react';

import ImperialUnits from './ImperialUnits/ImperialUnits';
import MetricUnits from './MetricUnits/MetricUnits'; 
import FrontCard from '../../../Components/UI/Flipcard/FrontCard/FrontCard';
import FrontLayout from '../../../Components/FrontLayout/FrontLayout';
import Field from '../../../Components/FrontLayout/Field/Field';
import Tabs from '../../../Components/UI/Tabs/Tabs';
import Input from '../../../Components/UI/Input/Input';
import { Route, Switch, NavLink, useLocation, withRouter, Redirect} from 'react-router-dom';
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
        // setTimeout(() => {
            // props.flip(180);
        // }, 250);
        props.history.push('/back');
    }

    const [settingsToggler, toggle] = useState(true);
    const SettingsHandler = () => {
        // console.log('SETTINGS')
            props.redux.setSettings(settingsToggler ? '/settings' : '');
            props.history.push(props.redux.routeReducer.currentMasterRoute + props.redux.routeReducer.currentUnitRoute + (settingsToggler ? '/settings' : ''));

            if (!settingsToggler) toggle(true); else toggle(false);
    }

    const ResetHandler = () => {
        console.log('RESET');
    }

    useEffect(() => {
        if (props.flip) {
            props.flip(180);
        }
    });

    

    return (
        <>
            <FrontCard>
                <FrontLayout>
                    <Field whole>
                        <Tabs active={props.redux.routeReducer.currentUnitRoute} redux= { props.redux }/>
                    </Field>
                    <Field label="age">
                        <Input change={(e) => props.redux.setAge(e.target.value)} type="number" guide="years" trigger={false} />
                    </Field>
                    <Field label="gender" >
                        <div className="radioContainer">
                            <Input type="radio" name="gender" id="male" guide="male" change={() => props.redux.setGender('male')} checked={props.redux.reducer.gender === 'male'} />
                        </div>
                        <div className="radioContainer">
                            <Input type="radio" name="gender" id="female" guide="female" change={() => props.redux.setGender('female')} checked={props.redux.reducer.gender === 'female'}/>
                        </div>
                    </Field>
                    <Switch>
                        <Route exact path={props.redux.routeReducer.currentMasterRoute+'/imperial'+props.redux.routeReducer.currentSettingsRoute} render={() => <ImperialUnits redux={ props.redux } />} />
                        <Route exact path={props.redux.routeReducer.currentMasterRoute+'/metric'+props.redux.routeReducer.currentSettingsRoute} render={() => <MetricUnits redux={ props.redux } />} />
                        <Redirect from="/front" to={"/front"+props.redux.routeReducer.currentUnitRoute}/>
                    </Switch>
                    <Field label="activity">
                        <RangeActiv change={(e) => props.redux.setActivity(e.target.value)} />
                    </Field> 
                    <Field label="goal">
                        <RangeGoal change={(e) => props.redux.setGoal(e.target.value)} />
                    </Field>
                    <Switch>
                        <Route exact path="/front/imperial/settings" render={() => <Settings/>} />
                        <Route exact path="/front/metric/settings" render={() => <Settings/>} />
                    </Switch>
                    <Field end>
                        <Button click={(e) => SettingsHandler(e)} icon><BsFillGearFill style={{fontSize: '1.5em'}} /></Button>
                        <Button click={ResetHandler} icon><BsArrowClockwise style={{fontSize: '1.5em'}} /></Button>
                        <Button click={TOTALhandler}>total</Button>
                    </Field> 
                </FrontLayout>
            </FrontCard>
            {props.render ? props.render() : null}
        </>
    )
}

export default withRouter(Front);