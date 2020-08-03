import { connect } from 'react-redux';
import { getVideos } from "../../store/actions";

import VideoPage from "./VideoPage";

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
)(VideoPage);
