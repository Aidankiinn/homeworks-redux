const initialState = {
    password: '',
    color: ''
}

const reducer = (state = initialState, action) => {
    if ((action.type === 'PASSWORD')) {
        if (state.password.length === 4) {
            return state;
        }
        if (isNaN(state.password)) {
            return {...state, password: action.payload, color: ''};
        }
        return {...state, password: state.password + action.payload, color: ''};
    }

    if ((action.type === 'DELETE')) {
        if (isNaN(state.password)) {
            return {...state, password: '', color: ''}
        }
        const password = state.password;
        const newPassword = password.slice(0, -1);
        return {...state, password: newPassword};
    }
    if ((action.type === 'CHECK')) {
        if (state.password === '1234') {
            return {...state, password: 'Access Granted!', color: 'green'}
        } else if (state.password === '') {
            return {...state, password: 'Enter PIN Code!', color: 'blue'}
        } else {
            return {...state, password: 'Access Denied!', color: 'red'}
        }
    }
    return state;
};

export default reducer;