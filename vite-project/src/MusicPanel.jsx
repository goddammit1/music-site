import React, { useState, useRef, useEffect } from 'react';
import track from './music/dd.mp3';

const MusicPanel = () => {
    // Состояния и рефы
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const [dragging, setDragging] = useState(false);

    // Воспроизведение
    const handlePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Изменение громкости
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume / 100;
    };

    // Обновление текущего времени
    const updateCurrentTime = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };

    // Эффект обновления громкости и событий
    useEffect(() => {
        audioRef.current.volume = volume / 100;
        audioRef.current.addEventListener('timeupdate', updateCurrentTime);
        return () => {
            audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
        };
    }, [volume]);

    // Обработчики для перетаскивания
    const handleMouseDown = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (event) => {
        if (!dragging) return;

        const progressBar = document.querySelector('.soundtrack');
        const rect = progressBar.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const newProgressPercent = Math.min(Math.max(0, (offsetX / rect.width) * 100), 100);
        const newTime = (newProgressPercent / 100) * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    // Эффект для глобальных событий
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    // Процент прогресса
    const progressPercent = (currentTime / duration) * 100 || 0;

    return (
      <div className="music_panel_area">
        <div className="music_panel">
          <div className="track_panel_buttons">
            <button
              className="svg_icons_panel_svg"
              onClick={() => {
                /* Обработчик воспроизведения предыдущей дорожки */
              }}
            >
              {/* SVG для предыдущей дорожки */}
              <svg
                className="svg_icons_panel_button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
              >
                <path d="M269.671,328.098l-120.873-68.719c-7.146-4.063-7.156-14.357-0.018-18.434l120.873-69.033c7.072-4.039,15.869,1.068,15.869,9.212v137.752C285.522,327.011,276.743,332.119,269.671,328.098z" />
                <path d="M340.716,328.098l-120.873-68.719c-7.146-4.063-7.156-14.357-0.018-18.434l120.873-69.033c7.072-4.039,15.869,1.068,15.869,9.212v137.752C356.567,327.011,347.788,332.119,340.716,328.098z" />
              </svg>
            </button>
            <audio ref={audioRef} src={track} preload="auto"></audio>
            <button className="svg_icons_panel_svg" onClick={handlePlay}>
              {/* SVG для воспроизведения/паузы */}
              <svg
                className="svg_icons_panel_button" id='play_panel_button'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
              >
                <path d="M174.152,357.323l166.105-94.435c9.82-5.583,9.834-19.731,0.025-25.332l-166.105-94.866c-9.718-5.55-21.807,1.468-21.807,12.659V344.65C152.369,355.83,164.434,362.849,174.152,357.323z" />
              </svg>
            </button>
            <button
              className="svg_icons_panel_svg"
              onClick={() => {
                /* Обработчик воспроизведения следующей дорожки */
              }}
            >
              {/* SVG для следующей дорожки */}
              <svg
                className="svg_icons_panel_button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
              >
                <path d="M230.329,328.098l120.873-68.719c7.146-4.063,7.156-14.357,0.018-18.434l-120.873-69.033c-7.072-4.039-15.869,1.068-15.869,9.212v137.752C214.478,327.011,223.257,332.119,230.329,328.098z" />
                <path d="M159.284,328.098l120.873-68.719c7.146-4.063,7.156-14.357,0.018-18.434l-120.873-69.033c-7.072-4.039-15.869,1.068-15.869,9.212v137.752C143.433,327.011,152.212,332.119,159.284,328.098z" />
              </svg>
            </button>
          </div>
          <div className="volume_panel" style={{ position: "relative" }}>
            <input /* !слайдер щас вертикальный! */
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <button className="svg_icons_panel_svg" id='volume_button'>
              {/* SVG для регулировки громкости */}
              <svg
                className="svg_icons_panel_button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
              >
                <path
                  class="st0"
                  d="M334.355 313.994H127.807c-19.5 0-35.307-15.808-35.307-35.307v-57.374c0-19.5 15.808-35.307 35.307-35.307H334.354v127.988z"
                />
                <path
                  class="st0"
                  d="m292.522 119.21-121.564 66.796V250h163.397V128.213c0-11.635-26.617-17.364-41.833-9.003zM292.522 380.79l-121.564-66.796V250h163.397v121.787c0 11.635-26.617 17.364-41.833 9.003zM395.852 250H407.5c-.34-28.624-21.255-55.652-52.244-68.328-.433 2.932-.851 7.629 0 13.196 4.676 30.592 39.753 35.793 40.596 55.132z"
                />
                <path
                  class="st0"
                  d="M395.852 250H407.5c-.34 28.624-21.255 55.652-52.244 68.328-.433-2.932-.851-7.629 0-13.196 4.676-30.592 39.753-35.793 40.596-55.132z"
                />
                <path
                  class="st0"
                  d="M395.852 250H407.5c-.34-28.624-21.255-55.652-52.244-68.328-.433 2.932-.851 7.629 0 13.196 4.676 30.592 39.753 35.793 40.596 55.132z"
                />
                <path
                  class="st0"
                  d="M395.852 250H407.5c-.34 28.624-21.255 55.652-52.244 68.328-.433-2.932-.851-7.629 0-13.196 4.676-30.592 39.753-35.793 40.596-55.132z"
                />
              </svg>
            </button>
          </div>
          <div className="soundtrack" onMouseDown={handleMouseDown}>
            <div
              className="soundtrack_progressbar"
              style={{ width: `${progressPercent}%` }}
            ></div>
            <div
              className="soundtrack_button"
              id="play-button"
              style={{ left: `${progressPercent}%` }}
            >
              <div className="time_display" id="time-display">
                <div className="time_display_current">
                  {Math.floor(currentTime / 60).toString().padStart(1, "0")}:{(Math.floor(currentTime) % 60).toString().padStart(2, "0")} / {Math.floor(duration / 60).toString().padStart(1, "0")}:{(Math.floor(duration) % 60).toString().padStart(2, "0")}
                </div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progressPercent}
              onChange={(e) => {
                const newTime = (e.target.value / 100) * duration;
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }}
              className="progress-slider"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: 0,
              }}
            />
          </div>
        </div>
      </div>
    );
};

export default MusicPanel;