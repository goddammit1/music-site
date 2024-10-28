import React from "react";
import Player from "./Player";
import Lyrics from "./Lyrics";
import MusicPanel from "./MusicPanel.jsx"
import "./App.css";

function App() {
    return (
        <div className="body_settings">
            <Player />
            <Lyrics />
            <MusicPanel />
        </div>
    );
}

export default App;