import { Message } from "../models/message";

interface ChatMessageProps {
    message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
    return (
        <>
            <span style={{ color: message.color }}>{message.author}</span>
            @ {message.time} <br />
            {message.text}
        </>
    )
}
