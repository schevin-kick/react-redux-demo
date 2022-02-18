import React from 'react';
import * as appActions from './actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


const Step2Component = () => {
    const step2 = useSelector((state) => state.step2);
    const dispatch = useDispatch();
    const actions = bindActionCreators(appActions, dispatch);

    const visible = step2.isActive ? 'active' : '';

    return (
        <div className={`step2 App ${visible}`}>
            <input type="text" placeholder='description' value={step2.description} onChange={(e) => actions.updateDescription(e.target.value) } />
        </div>
    )
}

export default Step2Component;