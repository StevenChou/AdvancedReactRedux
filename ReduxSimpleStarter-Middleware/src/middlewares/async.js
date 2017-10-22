export default function({dispatch}) {
    return next => action => {
        console.log(action);

        // call next middleware or reducers
        next(action);
    }
}