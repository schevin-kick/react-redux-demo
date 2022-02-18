export const updateFirstName = (val) => {
    return (dispatch) => {
        dispatch({
            type: 'FIRST-NAME-UPDATE',
            value: val
        })
    }
}

export const updateLastName = (val) => {
    return (dispatch) => {
        dispatch({
            type: 'LAST-NAME-UPDATE',
            value: val
        })
    }
}

export const updateDescription = (val) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE-DESCRIPTION',
            value: val
        })
    }
}

export const goTonextStep = () => {
    return (dispatch) => {
        dispatch({
            type: 'NEXT-STEP'
        })
    }
}

export const getData = () => {
    return async(dispatch) => {
        dispatch({
            type: 'LOADING'
        });

        const data = await fetch('');
        
        dispatch({
            type: 'LOADED',
            value: data
        })
        dispatch({
            type: 'DONE-LOADING'
        })
    }
}