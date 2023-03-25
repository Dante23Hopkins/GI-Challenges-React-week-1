import React from 'react'

function BasicInfo(props) {
    return (
        <div>
            <h2>Basic Info</h2>
            <p>Name: {props.person.name}</p>
            <p>Age: {props.person.number}</p>
            <p>Email: {props.person.dob}</p>
        </div>
    );
}

export default BasicInfo;