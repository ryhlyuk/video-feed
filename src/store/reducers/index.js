const initialState = {
    videos: [],
    hasMore: true,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return {
                ...state, videos: action.payload || [], hasMore: true
            };
        default:
            return state;
    }
};

export default reducers;
