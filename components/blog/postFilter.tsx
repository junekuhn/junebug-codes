import React from "react";

type Props = {
    postType: string;
    onChange: (e)=>void;
}

export const PostFilter = (({ postType, onChange }: Props) => {

    return (
        <div id="postFilter" className="w-full flex justify-around text-base md:text-lg ">
            <h2 onClick={onChange} 
            className={`p-2 rounded ${postType.toLowerCase()=='all' ? "opacity-100 underline": "opacity-40" }`}>
                All
            </h2>
            <h2 onClick={onChange} 
            className={`p-2 rounded ${postType.toLowerCase()=='web' ? "opacity-100 underline": "opacity-40" }`}>
                Web
            </h2>
            <h2 onClick={onChange} className={`p-2 rounded ${postType.toLowerCase()=='audio' ? "opacity-100 underline": "opacity-40" }`}>Audio</h2>
            <h2 onClick={onChange} className={`p-2 rounded ${postType.toLowerCase()=='art' ? "opacity-100 underline": "opacity-40" }`}>Art</h2>

        </div>
    )
});