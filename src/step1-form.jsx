import React from 'react';
import * as appActions from './actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


const Step1Component = () => {
    const step1 = useSelector((state) => state.step1);

    const dispatch = useDispatch();
    const actions = bindActionCreators(appActions, dispatch);

    const visible = step1.isActive ? 'active' : '';

    return (
        <div className={`step1 App ${visible}`}>
        {step1.isLoading && 
            <div>loading</div>
        }
            <input type="text" placeholder='first name' value={step1.firstName} onChange={(e) => actions.updateFirstName(e.target.value) } />
            <br/>
            <input type="text" placeholder='first name' value={step1.lastName} onChange={(e) => actions.updateLastName(e.target.value) } />
            <button onClick={() => actions.goTonextStep()}>Next Step</button>
        </div>
    )
}

export default Step1Component;