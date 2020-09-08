import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const List = ({ list}) => {
    debugger
    return (
        list.map(({ id, name, surename }) => <NavLink   key={id} to={"/changedata/" + id}><Item id={id} name={name} surename={surename} /></NavLink>)
    )
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(List);