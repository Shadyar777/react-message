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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
            // stateCopy.newMessageBody = action.body;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                    messages: [...state.messages, {
                        id: 8,
                        massege: body,
                    }]
            };
            // сейчас не используют "push", а добовляют в массив
            // stateCopy.messages.push({
            //     id: 8,
            //     massege: body,
            // });

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