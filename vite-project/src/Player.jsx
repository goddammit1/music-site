import React, { useRef, useState } from "react";
import ddImage from './assets/img_music/dd.jpg';

const Player = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {  // Check if audioRef is valid
            if (isPlaying) {
                audioRef.current.pause(); // Pause if already playing
            } else {
                audioRef.current.play(); // Play if currently paused
            }
            setIsPlaying(prev => !prev); // Use callback for state update
        }
    };

    return (
        <div className="panel">
            <div className="play_button" onClick={togglePlay}>
                <svg className="play_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500">
                    <path
                        d="M550,1150l600-340c35-20,35-70,0-90l-600-340c-35-20-80,5-80,45v680C470,1160,515,1180,550,1150z"
                        fill="black"/>
                </svg>
            </div>
            <div className="text_panel">
                <h1 style={{ backgroundColor: 'black', padding: '10px 15px', color: 'white' }}>psychosis & torontokyo - dd</h1>
                <div className="svg_icons">
                    <button className="text_panel_button">
                        <svg className="svg_text_panel_button" version="1.1" id="like" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             width="90%" height="90%" viewBox="0 0 500 500" style={{ enableBackground: 'new 0 0 500 500' }}
                             xmlSpace="preserve">
                            <path className="st0" d="M250,377.856c-52.313-50.561-87.594-83.685-108.374-101.718c-1.866-1.62-6.71-5.803-11.507-12.672
                                            c-10.829-15.509-19.983-42.652-9.476-70.394c10.03-26.483,35.273-46.379,64.979-48.058c38.253-2.161,61.601,27.149,63.626,29.782
                                            c8.192,8.89,17.817,21.005,26.535,36.617c10.832,19.4,16.478,37.418,19.565,50.87"/>
                            <path className="st0" d="M250,377.856c52.313-50.561,87.594-83.685,108.374-101.718c1.866-1.62,6.71-5.803,11.507-12.672
                                            c10.829-15.509,19.983-42.652,9.476-70.394c-10.149-26.796-35.622-46.188-64.979-48.058c-39.58-2.521-63.449,28.249-65.204,30.595"/>
                        </svg>
                    </button>
                    <button className="text_panel_button">
                        <svg className="svg_text_panel_button" version="1.1" id="add_playlist"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%"
                             height="100%" viewBox="0 0 500 500" style={{ enableBackground: 'new 0 0 500 500' }}
                             xmlSpace="preserve">
                            <path className="st0"
                                  d="M337.856,200.489H178.794c-10.682,0-19.341-8.659-19.341-19.341l0,0c0-10.682,8.659-19.341,19.341-19.341
                                        h159.062c10.682,0,19.341,8.659,19.341,19.341l0,0C357.197,191.829,348.538,200.489,337.856,200.489z"/>
                            <path className="st0"
                                  d="M337.856,268.328H178.794c-10.682,0-19.341-8.659-19.341-19.341l0,0c0-10.682,8.659-19.341,19.341-19.341
                                        h159.062c10.682,0,19.341,8.659,19.341,19.341l0,0C357.197,259.668,348.538,268.328,337.856,268.328z"/>
                            <path className="st0"
                                  d="M288.492,334.916H178.794c-10.682,0-19.341-8.659-19.341-19.341l0,0c0-10.682,8.659-19.341,19.341-19.341
                                        h109.698c10.682,0,19.341,8.659,19.341,19.341l0,0C307.833,326.257,299.174,334.916,288.492,334.916z"/>
                            <path className="st0" d="M364.458,318.361h-33.007c-4.487,0-8.125-3.638-8.125-8.125l0,0c0-4.487,3.638-8.125,8.125-8.125h33.007
                                        c4.487,0,8.125,3.638,8.125,8.125l0,0C372.583,314.724,368.945,318.361,364.458,318.361z"/>
                            <path className="st0" d="M356.08,294.511v31.451c0,4.487-3.638,8.125-8.125,8.125l0,0c-4.487,0-8.125-3.638-8.125-8.125v-31.451
                                        c0-4.487,3.638-8.125,8.125-8.125l0,0C352.442,286.386,356.08,290.023,356.08,294.511z"/>
                        </svg>
                    </button>
                    <button className="text_panel_button">
                        <svg className="svg_text_panel_button" version="1.1" id="next_up" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             width="90%" height="100%" viewBox="0 0 500 500" style={{ enableBackground: 'new 0 0 500 500' }}
                             xmlSpace="preserve">
                            <path className="st0"
                                  d="M337.856,200.489H178.794c-10.682,0-19.341-8.659-19.341-19.341l0,0c0-10.682,8.659-19.341,19.341-19.341
                                        h159.062c10.682,0,19.341,8.659,19.341,19.341l0,0C357.197,191.829,348.538,200.489,337.856,200.489z"/>
                            <path className="st0"
                                  d="M337.856,268.328H178.794c-10.682,0-19.341-8.659-19.341-19.341l0,0c0-10.682,8.659-19.341,19.341-19.341
                                        h159.062c10.682,0,19.341,8.659,19.341,19.341l0,0C357.197,259.668,348.538,268.328,337.856,268.328z"/>
                            <path className="st0"
                                  d="M288.492,334.916H178.794c-10.682,0-19.341-8.659-19.341-19.341l0,0c0-10.682,8.659-19.341,19.341-19.341
                                        h109.698c10.682,0,19.341,8.659,19.341,19.341l0,0C307.833,326.257,299.174,334.916,288.492,334.916z"/>
                            <polygon className="st1" points="323.326,289.98 323.326,334.916 368.935,312.064 "/>
                        </svg>
                    </button>
                </div>
            </div>
            <audio ref={audioRef} src="/music/dd.mp3" preload="auto"></audio>
            <div className="img250px">
                <img className="img" src={ddImage} alt="dd" />
            </div>
        </div>
    );
};

export default Player;