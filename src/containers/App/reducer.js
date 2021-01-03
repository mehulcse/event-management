const globalReducer = (state = {}, { type }) => {
    console.log('In Reducer');
    switch (type) {
        default:
            return state;
    }
};

export default globalReducer;
