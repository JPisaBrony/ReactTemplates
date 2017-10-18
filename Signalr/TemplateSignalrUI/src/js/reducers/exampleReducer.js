export default function reducer(state = {
    exampleVariable: null
}, action) {
    switch (action.type) {
        case "EXAMPLE_ACTION":
            console.log(action.payload);
            return { ...state, exampleVariable: action.payload }
    }

    return state;
}