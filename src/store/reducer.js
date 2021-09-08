const initialState = {
    password: '',
    open: false,
    title: ''
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
            // return <ModalMessage/>
            return {...state, open: true, title: 'SUCCESS!'}
        } else if (state.password === '') {
            console.log('EMPTY');
            return {...state, open: true, title: 'EMPTY!'}
        } else {
            console.log('ERROR')
            return {...state, open: true, title: 'ERROR!'}
        }
    }
    if ((action.type === 'CLOSE')) {
        return {...state, open: false}
    }
    return state;
};

export default reducer;