import React, { Component } from 'react';

const CompContext = React.createContext();

export class Container extends Component {
    state = {
        compName: "TCS",
        personName: "Lisa",
        designation: "Manager"
    }

    render() {
        const { compName, personName, designation } = this.state;
        return (
            <CompContext.Provider
            value = {{
                    compName, personName, designation
                }}
            >
                <Company/>
                <Name />
            </CompContext.Provider>
        );
    }
}


const Company = () => {
    return <CompContext.Consumer>
        {({compName}) => (
            <React.Fragment>
                <h3>Company Name: {compName}</h3>
            </React.Fragment>
        )}
    </CompContext.Consumer>
}

const Name = () => {
    return <CompContext.Consumer>
        {({personName}) => (
            <React.Fragment>
                <h4>Name of employee: {personName}</h4>
            </React.Fragment>
        )}
    </CompContext.Consumer>
}