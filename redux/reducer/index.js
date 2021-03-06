export default (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "DEL":
            return state - 1;
        case "CHANGE":
            return action.payload.num
        default:
            return state;
    }
}