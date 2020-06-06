import React, { useState } from 'react';
import './Settings.scss';
import Field from '../../FrontLayout/Field/Field';
import Input from '../../UI/Input/Input';
import defaults from '../../../defaults/defaults.scss';

const Settings = () => {
    const [formula, changeFormula] = useState(defaults.defaultFormula);
    return (
        <Field label="formula" auto>
            <div className="Settings">
                <div className="opt">
                    <Input type="radio" name="formula" id="MSJ" guide="Mifflin-St Jeor" change={() => changeFormula('MSJ')} checked={formula==='MSJ'} />
                </div>
                <div className="opt">
                    <Input type="radio" name="formula" id="KM" guide="Katch-McArdle" change={() => changeFormula('KM')} checked={formula==='KM'} />
                </div>
                <div className="opt">
                    <Input type="radio" name="formula" id="HB" guide="Harris-Benedict" change={() => changeFormula('HB')} checked={formula==='HB'} />
                </div>
            </div>
        </Field>
    );
};

export default Settings;