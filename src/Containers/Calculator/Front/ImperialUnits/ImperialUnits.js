import React from 'react';
import Field from '../../../../Components/FrontLayout/Field/Field';
import Input from '../../../../Components/UI/Input/Input';

const imperialUnits = (props) => {
    return (
        <>
            <Field label="height">
                <Input type="number" change={ (e) => props.redux.write.setIunitHeightFeet(e.target.value) } guide="feet" style={{
                    width: '48%',
                    marginRight: '0',
                }} />
                <Input type="number" change={ (e) => props.redux.write.setIunitHeightInches(e.target.value) } guide="inches" style={{
                    width: '48%',
                }} />
            </Field> 
            <Field label="weight">
                <Input type="number" change={ (e) => props.redux.write.setIunitWeight(e.target.value) } guide="pounds"/>
            </Field>
        </>
    );
}

export default imperialUnits; 