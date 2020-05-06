import React from "react";

import MenuItem from "../Menu-Item/MenuItem.component";

import SECTIONS_DATA from "./sections.data";
import "./Directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = { SECTIONS_DATA };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.SECTIONS_DATA.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
