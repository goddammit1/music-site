import { useState } from "react";
import "./App.css";
import Header from "./parts/Header";
import MusicCard from "./parts/MusicCard";
import Albums from "./parts/Albums";
import Artist from "./parts/Artist";
import NewTracks from "./parts/New_tracks";
import Playlist from "./parts/Playlist";

function App() {
  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main-panel">
        <div className="main-panel-area">
          <div className="Gird">
            <div className="Flex">
              <MusicCard></MusicCard>
              <div className="albums-artists">
                <Albums></Albums>
                <Artist></Artist>
              </div>
            </div>
            <NewTracks></NewTracks>
            <div className="Flex">
              <Playlist></Playlist>
              <div style={{marginLeft: '30px'}}>
                <MusicCard></MusicCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
