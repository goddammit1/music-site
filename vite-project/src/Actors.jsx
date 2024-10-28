import React from "react";
import PsychosisImg from "./avatars/psychosis.jpg";
import TorontokyoImg from "./avatars/torontokyo.jpg";

function Actor() {
    return (
        <div className="actors">
            <h1 className="actors_name">
                Actor_Name
            </h1>
            <img className="actors_img" src={PsychosisImg} alt="psycho" />
        </div>
    );
}
export default Actor