const initialstae = {
    description: '',
    isActive: false
};

const step2Reducer = (state = initialstae, action) => {
    switch(action.type) {
        case 'UPDATE-DESCRIPTION':
            return {
                ...state,
                description: action.value
            }
        case 'NEXT-STEP':
            return {
                ...state,
                isActive: true
            }
        default:
            return state;
    }
}

export default step2Reducer;