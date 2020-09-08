const initialState = {
    user: {
        name: '',
        surename: '',
        age: '',
        id: 0
    },
    list: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTR_NAME":
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload,

                }
            }
        case "REGISTR_SURENAME":
            return {
                ...state,
                user: {
                    ...state.user,
                    surename: action.payload,
                }
            }
        case "REGISTR_AGE":
            return {
                ...state,
                user: {
                    ...state.user,
                    age: action.payload
                }
            }
        case "SAVE_DATA":
            return {
                ...state,
                list: [{ ...state.user, id: state.user.id + 3 }, ...state.list],
                user: {
                    ...state.user,
                    id: state.user.id + 3
                },
            }
        case "CHANGE_DATA":
            return {
                ...state,
                user: {
                    ...state.list.find(({ id }) => id === action.payload)
                }
            }
        case "CHANGE_USERDATA":
            debugger
            return {
                ...state,
                list: [
                    ...state.list.map((item) => {
                        if(item.id === state.user.id){
                            return {
                                ...state.user
                            }
                        }else{
                            return item;
                        }
                    }),
                    
                ]
            }
        default:
            return state;
    }

}

export default rootReducer;