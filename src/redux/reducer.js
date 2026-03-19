import { INCREMENT, DECREMENT } from "../redux/actions";

// Initial state
const initialState = {
    count: 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};


// Tell me what we have done in above code ?
// In the above code, we have defined a reducer function called `counterReducer` that 
// manages the state of a counter. The initial state is set to an object with a `count` 
// property initialized to 0. The reducer listens for two action types: `INCREMENT` and 
// `DECREMENT`. When it receives an `INCREMENT` action, it returns a new state object 
// with the `count` incremented by 1. When it receives a `DECREMENT` action, it returns 
// a new state object with the `count` decremented by 1. If the action type does not 
// match either of these, it returns the current state unchanged.

// What does this ...state do in above code ?
// The `...state` syntax in the above code is the spread operator, which is used to create
// a new object that includes all the properties of the existing `state` object. This is
// important in Redux because we want to ensure that we are not mutating the existing state
// object.

// Make me understand it in simple words ?
// In simple words, the `...state` is like copying all the existing properties of the state
// into a new object. This way, we can create a new state object without changing the original
// state. This is important because in Redux, we want to keep our state immutable, meaning
// we don't want to change the existing state directly, but instead create a new state based
// on the old one with the necessary changes.