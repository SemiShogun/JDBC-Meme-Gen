import React from 'react';
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

const MusicBar = ({ playAudio, pauseAudio }) => {

    return (
        <div>
            <h1>Music</h1>
            <Button type="submit" onClick={playAudio} variant="contained" color="primary" style={{margin: 10}}>
                <PlayArrowIcon/>
            </Button>
            <Button type="submit" onClick={pauseAudio} variant="contained" color="primary" style={{margin: 10}}>
                <PauseIcon/>
            </Button>
        </div>
    );
}

export default MusicBar;