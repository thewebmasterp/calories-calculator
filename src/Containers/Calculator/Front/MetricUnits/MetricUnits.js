import React from 'react';
import Field from '../../../../Components/FrontLayout/Field/Field';
import Input from '../../../../Components/UI/Input/Input';

const metricUnits = () => {
    return (
        <>
            <Field label="height">
                <Input type="number" guide="centimeters"/>
            </Field> 
            <Field label="weight">
                <Input type="number" guide="kilograms" />
            </Field>
        </>
    );
}

export default metricUnits; 