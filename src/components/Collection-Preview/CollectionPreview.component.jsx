import React from "react";

import CollectionItem from "../Collection-Item/CollectionItem.component";

import "./collection-preview.styles.scss";

function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <div key={id}>
                            <CollectionItem {...otherItemProps} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview;
