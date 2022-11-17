import { messageTypes } from "../types/message";

export const messages: messageTypes[] = [
    {
        message: "salut :)",
        to: 1,
        from:3,
        createdAt: new Date()
    },
    {
        message: "salut comment ca  va :)",
        to:3,
        from:1,
        createdAt: new Date()
    },
    {
        message: "bien",
        to:1,
        from:3,
        createdAt: new Date()
    }
];