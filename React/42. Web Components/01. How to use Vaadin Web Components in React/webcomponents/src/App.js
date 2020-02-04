import React, { useState, useEffect } from 'react';

import './App.css';

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

const VaadinGrid = ({ content }) => {
    useEffect(() => {
        document.querySelector("#grid").items = content;
    });

    return (
        <vaadin-grid id="grid">
            <vaadin-grid-column path="firstName" header="First name" />
            <vaadin-grid-column path="lastName" header="Last name" />
        </vaadin-grid>
    )
}

const App = () => {
    const [people, setPerson] = useState([]);

    useEffect(() => {
        document.querySelector("#addButton").addEventListener('click', e => {
            setPerson(people.concat({
                firstName: document.querySelector("#firstName").value,
                lastName: document.querySelector("#lastName").value
            }));
            document.querySelector("#firstName").value = '';
            document.querySelector("#lastName").value = '';
        });
    });

    return (
        <>
            <div className="form">
                <vaadin-text-field label="First Name" id="firstName" />
                <vaadin-text-field label="Last Name" id="lastName" />
                <vaadin-button id="addButton"> Add </vaadin-button>
            </div>
            <VaadinGrid content={people} />
        </>
    )
}

export default App;