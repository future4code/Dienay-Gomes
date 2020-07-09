import React from "react"
import {AddNewMusic} from "./style"


class AddMusic extends React.Component {
  render() {
    return (
        <AddNewMusic>
            <h3>Add new music</h3>
            <span onClick={this.props.closeAddMusic}>X</span>
            <div>
                <input 
                    type={"text"}
                    value={this.props.nameValue} 
                    onChange={this.props.nameOnChange}
                    placeholder={"Name"}
                />
                <input 
                    type={"text"}
                    value={this.props.artistValue} 
                    onChange={this.props.artistOnChange}
                    placeholder={"Artist"}
                />
                <input 
                    type={"text"}
                    value={this.props.urlValue} 
                    onChange={this.props.urlOnChange}
                    placeholder={"url"}
                />
                <button onClick={this.props.addMusic} >add</button>
            </div>
        </AddNewMusic>
    )
  }
}

export default AddMusic