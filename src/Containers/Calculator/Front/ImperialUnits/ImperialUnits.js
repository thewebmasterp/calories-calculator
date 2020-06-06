import React from 'react';
import Field from '../../../../Components/FrontLayout/Field/Field';
import Input from '../../../../Components/UI/Input/Input';

const imperialUnits = () => {
    return (
        <>
            <Field label="height">
                <Input type="number" guide="feet" style={{
                    width: '48%',
                    marginRight: '0',
                }} />
                <Input type="number" guide="inches" style={{
                    width: '48%',
                }} />
            </Field> 
            <Field label="weight">
                <Input type="number" guide="pounds"/>
            </Field>
        </>
    );
}

export default imperialUnits; 