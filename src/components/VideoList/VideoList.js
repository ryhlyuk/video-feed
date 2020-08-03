import React, {useEffect, useState} from 'react';
import { Spin } from "antd";
import InfiniteScroll from 'react-infinite-scroller';

import VideoItem from "./VideoItem/VideoItem";

import './videoList.css';

const VideoList = ({getVideos, videos, hasMore}) => {
    const [loading, setLoading] = useState(true);
    const [videoList, setVideoList] = useState({
        list: [],
        hasMore: false
    });

    useEffect(() => {
        setLoading(true);
        getVideos();
    }, []);

    useEffect(() => {
        if(videos) {
            setVideoList({
                list: videos,
                hasMore,
            });
        }
        setLoading(false);
    }, [videos]);

    const handleInfiniteOnLoad = () => {
        setLoading(true);
        getVideos();
    };

    return (
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && videoList.hasMore}
            className="video-list-wrapper"
            loader={
                    loading
                    && <div className="demo-loading-container">
                    <Spin />
                </div>
            }
            useWindow={false}
        >
            {
                videoList.list && videoList.list.map((item, key) =>
                    <VideoItem key={item.videoId || key} iterateKey={item.videoId || key} video={item} />
                )
            };
        </InfiniteScroll>
    );
};

export default VideoList;
