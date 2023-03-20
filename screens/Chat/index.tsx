import { useEffect, useRef, useState } from "react";
import { RootTabScreenProps } from "../../types";
import { ReversedContainer } from "./styles";

import UserInput from "./UserInput";
import MessageHistory from "./MessageHistory";
import GPT from "../../components/GPT_3";
import Header from "../../components/Header";

let ignoreWhenStateIsCreated = true;

export default function ChatScreen({}: RootTabScreenProps<'Chat'>) {
    const [messages, setMessages] = useState<MessageData[]>([]);
    const isBotMessage = useRef(false);
    
    const onSend = (message: MessageData) => {
        if(message.author === 'gpt') {
            isBotMessage.current = true;
        } else {
            isBotMessage.current = false;
        }

        setMessages(oldMessages => [...oldMessages, message]);
    }

    const chatGPT = new GPT(onSend);

    useEffect(() => {
        if(ignoreWhenStateIsCreated) {
            ignoreWhenStateIsCreated = false;
            
            return;
        }

        if(isBotMessage.current) return;
        
        chatGPT.injectContext(messages);
        chatGPT.sendResponse();
    }, [messages]);

    return (
        <ReversedContainer>
            <UserInput onSend={onSend} />
            <MessageHistory messages={messages}/>
            <Header title='Chat' backButton/>
        </ReversedContainer>
    )
}

function useAutosizeTextArea(textAreaRef: HTMLTextAreaElement | null,
    value: string) {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;

            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);
}

export type MessageData = { author: string, value: string }