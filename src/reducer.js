export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
}

export default function reducer(state, action) {
    switch(action.type){
        case actionTypes.SET_USER:
            console.log('reducer all: ', {
                ...state,
                accc: action.user,
            });
            return{
                ...state,
                user: action.user,
            };
        default:
            return "thang null";
    }
}
