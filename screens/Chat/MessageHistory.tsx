import { MessageData } from ".";
import { MessageCloud, MessageContainer, StyledScrollView, StyledText } from "./styles";

const CloudMessage: React.FC<{ data: MessageData[] }> = ({ data }) => {
    const isOwnMessage = data[0].author === 'me';
    const mappedData = data.map(data => 
        <MessageCloud own={isOwnMessage}>
            <StyledText>{data.value}</StyledText>
        </MessageCloud>
    );

    return (
        <MessageContainer own={isOwnMessage}>
            {mappedData}
        </MessageContainer>
    )
}

const MessageHistory: React.FC<{ messages: MessageData[] }> = ({ messages }) => {
    const groupedMessages = messages.length > 0 ? groupByAuthor(messages) : [];
    
    let keycount = 0;
    const mappedData = groupedMessages.map(m => <CloudMessage key={++keycount} data={m} />);

    return (
        <StyledScrollView>
            {mappedData}
        </StyledScrollView>
    )
}

export default MessageHistory;


function groupByAuthor(messages: Array<MessageData>) {
    let groupedMessages: Array<Array<MessageData>> = [];
    let currentGroup: Array<MessageData> = [];

    for (let message of messages) {
        if (currentGroup.length > 0 && currentGroup[0].author === message.author) {
            currentGroup.push(message);
        } else {
            if (currentGroup.length > 0) {
                groupedMessages.push(currentGroup);
            } 
            currentGroup = [message];
        }
    }
    groupedMessages.push(currentGroup);
    return groupedMessages;
}
