const initialstae = {
    firstName: '',
    lastName: '',
    isActive: true,
    isLoading: false,
};



const step1Reducer = (state = initialstae, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'FIRST-NAME-UPDATE':
            return {
                ...state,
                firstName: action.value
            }
        case 'LAST-NAME-UPDATE':
            return {
                ...state,
                lastName: action.value
            }
        case 'NEXT-STEP':
            return {
                ...state,
                isActive: false
            }
        default:
            return state;
    }
}

export default step1Reducer;