import { GET_VIDEOS } from '../../constants/actions';

const VIDEO_COVERS = [
    '7 rings', 'China', 'Con Altura', 'Con Calma', 'Kill This Love', 'No Me Conoce', 'Secreto', 'Señorita'
];

export const getVideos = () => dispatch => {
    try {
        return fetch('https://playbuzz-cdn.s3.amazonaws.com/content/feed/resources.json', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                dispatch({
                    type: GET_VIDEOS,
                    payload: VIDEO_COVERS.map((cover, index) => {
                        resp.items[index].cover = `http://0.0.0.0:5000/assets/video-covers/${cover}.jpg`;
                        return resp.items[index];
                    })
                });
            })

    } catch (e) {
        dispatch({
            type: GET_VIDEOS,
            payload: []
        });
    }
}