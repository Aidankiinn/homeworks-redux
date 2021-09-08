const initialState = {
    password: ''
}

const reducer = (state = initialState, action) => {
    if ((action.type === 'PASSWORD')) {
        console.log(state.password)
        return {...state, password: state.password + action.payload};
    }
    if ((action.type === 'DELETE')) {
        const password = state.password;
        const newPassword = password.slice(0, -1);
        console.log(state.password)
        return {...state, password: newPassword};
    }
    if ((action.type === 'CHECK')) {
        if (state.password === '1234') {
            console.log('Success');
        } else if (state.password === '') {
            console.log('EMPTY');
        } else {
            console.log('ERROR')
        }
    }
    return state;
};

export default reducer;