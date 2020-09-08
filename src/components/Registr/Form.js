import React from 'react';
import {connect} from 'react-redux';
import {registrNameAction, registrSurenameAction, registrAgeAction} from '../../actions'

const Form = ({onRegistrUserName, onRegistrUserSurename, onRegistrUserAge, name, surename, age}) => {
    
    const onChangeInputName = ({target}) => {
        onRegistrUserName(target.value);
    }

    const onChangeInputSureName = ({target}) => {
        onRegistrUserSurename(target.value);
    }
    const onChangeInputAge = ({target}) => {
        onRegistrUserAge(target.value);
    }
    return (
        <section>
            <label>Name: <input value={name} type="text" id="name" onChange={onChangeInputName} /></label>
            <label>Surename: <input value={surename} type="text" id="surename" onChange={onChangeInputSureName} /></label>
            <label>Age: <input value={age} type="text" id="age" onChange={onChangeInputAge} /></label>
        </section>
    )
}

function mapStateToProps(state){
    return {
        name: state.user.name,
        surename: state.user.surename,
        age: state.user.age
    }
}

function marDispatchToProps(dispatch){
    return {
        onRegistrUserName: (name) => dispatch(registrNameAction(name)),
        onRegistrUserSurename: (surename) => dispatch(registrSurenameAction(surename)),
        onRegistrUserAge: (age) => dispatch(registrAgeAction(age))
    }
}

export default connect(mapStateToProps, marDispatchToProps)(Form);