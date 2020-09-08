import React from 'react';
import Form from '../Registr/Form';
import { connect } from 'react-redux';
import { changeUserDataAction } from '../../actions';
import { NavLink } from 'react-router-dom';

const ChangeData = ({ onChangeUserData }) => {
    return (
        <div className="registr">
            <Form />
            <NavLink to="/list"><button onClick={onChangeUserData}>Change</button></NavLink>
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        onChangeUserData: () => dispatch(changeUserDataAction())
    }
}

export default connect(null, mapDispatchToProps)(ChangeData);