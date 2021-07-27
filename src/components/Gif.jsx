import React from "react";
import { GifContainer } from "./Styles";


export const Gif = ({ url, title }) => {
    return (
        <GifContainer>
            <div>
                <img src={url} />
            </div>
            <h3>{title}</h3>
        </GifContainer>
    )
}