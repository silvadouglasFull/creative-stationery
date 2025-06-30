import React from "react";
export type Styles = {
    cardCaption: {
        backgroundColor: React.CSSProperties['backgroundColor'];
        backdropFilter: React.CSSProperties['backdropFilter'];
    } & React.CSSProperties;
}