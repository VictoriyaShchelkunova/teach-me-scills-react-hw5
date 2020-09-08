import React from 'react';
import './Registr.css';
import Form from './Form';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveDataAction } from '../../actions';

const Registr = ({onSaveData}) => {
    return (
        <div className="registr">
            <Form />
            <NavLink to='/list'><button onClick={onSaveData}>Save</button></NavLink>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onSaveData: () => dispatch(saveDataAction())
    }
}

export default connect(null, mapDispatchToProps)(Registr);