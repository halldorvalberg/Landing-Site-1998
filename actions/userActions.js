// we need to define and export the action setUserName
// the username should be saved to a cookie
// the action should be dispatched when the user clicks the submit button
export const setUserName = (name) => {
    return {
        type: 'SET_USER_NAME',
        name,
    };
    }