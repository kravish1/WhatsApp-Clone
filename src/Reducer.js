import { statement } from "@babel/template";

export const initialState = {
    user : null,
}

export const actionTypes = {
    SET_USER : "SET_USER",
}

const reducer = (state,action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...statement,
                user : action.user,
            };

            default:
                return state;
    }
}

export default reducer;