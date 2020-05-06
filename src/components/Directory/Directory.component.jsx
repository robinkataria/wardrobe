import React from "react";

import MenuItem from "../Menu-Item/MenuItem.component";

import sections from "./directory.data";
import "./Directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = { sections };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
