const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY",
    SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
    newMessageBody: "Hello world!",
    diologs: [{
            id: 1,
            name: "Shady",
            massege: "Hi!",
        },
        {
            id: 2,
            name: "Kicha",
            massege: "Hello!",
        },
        {
            id: 3,
            name: "Saka",
            massege: "Fuck you!",
        },
        {
            id: 4,
            name: "Eldos",
            massege: "Hahahaha!",
        },
        {
            id: 5,
            name: "Erasyl",
            massege: "What are you do?",
        },
        {
            id: 6,
            name: "Shady",
            massege: "Sleep",
        },
    ],
    messages: [{
            id: 1,
            massege: "Hi!",
        },
        {
            id: 2,
            massege: "Hello!",
        },
        {
            id: 3,
            massege: "Fuck you!",
        },
        {
            id: 4,
            massege: "Hahahaha!",
        },
        {
            id: 5,
            massege: "What are you do?",
        },
        {
            id: 6,
            massege: "Sleep",
        },
    ],
}
const diologsReducer = (state = initialState, action) => {
    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = "";
    //     state.messages.push({
    //         id: 8,
    //         massege: body,
    //     });
    // }
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            debugger;
            state.newMessageBody = "";
            state.messages.push({
                id: 8,
                massege: body,
            });
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (bodyValue) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: bodyValue
});

export default diologsReducer;