import React, { useState, useEffect } from 'react';
import Field from '../../../../Components/FrontLayout/Field/Field';
import Input from '../../../../Components/UI/Input/Input';
import config from '../../../../config';

const ImperialUnits = (props) => {


    const [params, changeParams] = useState({
        feet: global.config.mapInch_to_FeetandInch(props.redux.read.IUnit.height.inches)[0],
        inches: global.config.mapInch_to_FeetandInch(props.redux.read.IUnit.height.inches)[1],
    });

    const viceVersa = (param, event) => {
        let val = Number(event.target.value);
        if (param === 'feet') {
            changeParams({...params, feet: val});
        } else if (param === 'inches') {
            changeParams({...params, inches: val});
            if (Number(val) === 12 && params.feet >= 1) {
                changeParams({...params, inches: 0, feet: Number(params.feet)+1});
            } else if (Number(val) < 0) {
                changeParams({...params, inches: 11, feet: Number(params.feet)-1});
            }
        }
    }

    useEffect(()=>{
        const totalInches = global.config.totalIHEIGHTval(params.feet, params.inches);
        props.redux.write.setIunitHeight(totalInches);
    }, [params]);

    return (
        <>
            <Field label="height">
                <Input trigger={true} type="number" val={String(params.feet).replace(/^0+/, '')} change={ (e) => {viceVersa('feet', e)} } guide="feet" style={{
                    width: '48%',
                    marginRight: '0',
                }} />
                <Input trigger={true} type="number" val={String(params.inches).replace(/^0+/, '')} change={ (e) => {viceVersa('inches', e)} }  guide="inches" style={{
                    width: '48%',
                }} />
            </Field> 
            <Field label="weight">
                <Input trigger={true} def={props.redux.read.IUnit.weight.pounds} type="number" change={ (e) => {props.redux.write.setIunitWeight(e.target.value)} } guide="pounds"/>
            </Field>
        </>
    );
}

export default ImperialUnits; 