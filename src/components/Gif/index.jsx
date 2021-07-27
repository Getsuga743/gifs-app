import React from "react";
import { Link } from "wouter";
import { GifWrapper } from "./Styles";


export const Gif = ({ url, title, id }) => {
    return (
        <Link href={`/gif/${id}`}>
            <GifWrapper>
                <div>
                    <img src={url} />
                </div>
                <h3>{title}</h3>
            </GifWrapper>
        </Link>
        
    )
}