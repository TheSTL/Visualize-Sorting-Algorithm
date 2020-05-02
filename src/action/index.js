import keyMirror from 'key-mirror';

export const ActionTypes = keyMirror({
    SET_START_TIMESTAMP: null,
    SET_END_TIMESTAMP: null,
    CURRENT_TIMESTAMP: null,
    START_AGAIN: null,
    SET_SPEED: null,
});

export const Actions = {
    commonAction(type, data) {
        return { type, data }
    },
    setStartTimeStamp(data) {
        return Actions.commonAction(ActionTypes.SET_START_TIMESTAMP, data);
    },
    setEndTimeStamp(data) {
        return Actions.commonAction(ActionTypes.SET_END_TIMESTAMP, data);
    },
    setCurrentTimeStamp(data) {
        return Actions.commonAction(ActionTypes.CURRENT_TIMESTAMP, data);
    },
    start(data) {  
        Actions.stop();      
        return Actions.commonAction(ActionTypes.START_AGAIN, data);
    },
    setSpeed(data) {
        return Actions.commonAction(ActionTypes.SET_SPEED, data);
    },
    stop() {
        let id = window.setTimeout(function() {}, 0);
        while (id--) {
        window.clearTimeout(id); 
        }
    }
}

