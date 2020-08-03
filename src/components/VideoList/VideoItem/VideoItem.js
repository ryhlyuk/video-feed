import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { format, fromUnixTime } from 'date-fns';
import './videoItem.css';
import { ASSETS_URL } from "../../../constants/config";
import PlayCircleOutlined from "@ant-design/icons/lib/icons/PlayCircleOutlined";

const getMinutesAndSecondsFromSeconds = totalSeconds => {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
        return `${hours}:${minutes}:${seconds}`;
    }
    return `${minutes}:${seconds}m`;
};

const NoData = () => (
    <div className='no-data'>No data</div>
);

const numberFormatter = number => {
    if (number > 999 && number <= 999999) {
        return Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + 'K'
    } else if (number > 999999 && number < 999999999) {
        return Math.sign(number)*((Math.abs(number)/1000000).toFixed(1)) + 'M'
    }  else if (number > 999999999 && number < 999999999999) {
        return Math.sign(number)*((Math.abs(number)/1000000000).toFixed(1)) + 'B'
    } else if (number <= 999) {
        return number;
    }
};

const getSourceIcon = source => {
    switch (source) {
        case 'youtube': return 'youtube-icon.svg';
        case 'facebook': return 'facebook-icon.svg';
        case 'playbuzz': return 'Playbuzz-icon.svg';
        default: return 'play-button.png';
    }
};

const VideoItem = ({ video, iterateKey }) => {
    const history = useHistory();

    const navigateToVideoItem = () => {
        const { videoId } = video;
        history.push(`/video/${videoId}`);
    };

    return (
        <div className="video-item-wrapper" key={iterateKey} >
            <div className="video-item-video-cover">
                <img src={video.cover} alt="Cover for the video"/>
                {
                    video.source && video.source === 'playbuzz' && <div className="video-navigate-button-wrapper">
                        <PlayCircleOutlined onClick={navigateToVideoItem}/>
                    </div>
                }
            </div>
            <div className="video-item-video-title">{video.title || NoData()}</div>
            <div className="video-item-date-views-wrapper">
                <div className="video-item-date-wrapper">
                    {video.date ? format(fromUnixTime(video.date), 'dd MMM yyyy') : NoData()}
                </div>
                &nbsp;-&nbsp;
                <div className="video-item-views-wrapper">{video.views ? `${numberFormatter(video.views)} views` : NoData()} </div>
            </div>

            <div className="video-item-icon-length-wrapper">
                <div className="video-item-video-source">
                    <img src={`${ASSETS_URL}/${getSourceIcon(video.source)}`} alt={`Source icon - ${video.source}`}/>
                </div>
                <div className="video-item-length-wrapper"><b>{getMinutesAndSecondsFromSeconds(video.length)}</b></div>
            </div>
        </div>
    );
};

VideoItem.defaultProps = {
    video: {
        date: 0,
        length: 0,
    }
};

VideoItem.propTypes = {
    video: PropTypes.shape({
        date: PropTypes.number,
        length: PropTypes.number,
        source: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        videoId: PropTypes.string,
        views: PropTypes.number
    }),
    iterateKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default VideoItem;
