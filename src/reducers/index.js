import { userCredential, userData } from "../Data/data";

const initState = {
    credential: userCredential,
    userData: userData,
    isLoggedIn: false,
    errorMsg: ''
}

export default function rootReducer(state=initState, action) {
    switch(action.type) {
        case 'USER_LOGGIN': {
            const { username, password } = action.data
            if(username === state.credential.username) {
                if(password === state.credential.password) {
                    return {
                        ...state,
                        isLoggedIn: true
                    }
                } else {
                    return {
                        ...state,
                        errorMsg: 'Please enter a valid password'
                    }
                }
            } else {
                return {
                    ...state,
                    errorMsg: 'Please enter a valid username'
                }
            }
        }
        default: return state;
    }
}