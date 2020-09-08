import React from 'react';
import { connect } from 'react-redux';
import {changeDataAction} from '../../actions';

const Item = ({ id, name, surename, onChangeData}) => {
    return (
        <li onClick={() => setTimeout(() => onChangeData(), 1) } id={id}>{`${name} ${surename}`}</li>
    )
}


function mapDispatchToProps(dispatch, {id}){
    return {
        onChangeData: () => dispatch(changeDataAction(id))
    }
}

export default connect(null, mapDispatchToProps)(Item);

