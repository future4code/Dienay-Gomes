import React from 'react'

class ListUsers extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.mostraUser}</p>
            </div>
        )
    }
}

export default ListUsers