import React from 'react';
import Field from '../../../../Components/FrontLayout/Field/Field';
import Input from '../../../../Components/UI/Input/Input';

const metricUnits = (props) => {
    return (
        <>
            <Field label="height">
                <Input trigger={true} def={props.redux.read.MUnit.height.centimeters} change={ (e) => props.redux.write.setMunitHeight(e.target.value) } type="number" guide="centimeters"/>
            </Field> 
            <Field label="weight">
                <Input trigger={true} def={props.redux.read.MUnit.weight.kilograms} change={ (e) => props.redux.write.setMunitWeight(e.target.value) } type="number" guide="kilograms" />
            </Field>
        </>
    );
}

export default metricUnits; 