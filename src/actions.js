
export const registrNameAction = (name) => {
    return {
        type: "REGISTR_NAME",
        payload: name
    }
}

export const registrSurenameAction = (surename) => {
    return {
        type: "REGISTR_SURENAME",
        payload: surename
    }
}

export const registrAgeAction = (age) => {
    return {
        type: "REGISTR_AGE",
        payload: age
    }
}

export const saveDataAction = () => {
    return {
        type: "SAVE_DATA",
    }
}


export const changeDataAction = (id) => {
    return {
        type: "CHANGE_DATA",
        payload: id
    }
}

export const changeUserDataAction = () => {
    return {
        type: "CHANGE_USERDATA",
    }
}



