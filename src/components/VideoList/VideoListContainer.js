import { connect } from 'react-redux';
import { getVideos } from "../../store/actions";

import VideoList from "./VideoList";

const mapState = state => ({
    videos: state.videos,
    hasMore: state.hasMore,
});

const mapDispatch = {
    getVideos,
};

export default connect(
    mapState,
    mapDispatch
)(VideoList);
