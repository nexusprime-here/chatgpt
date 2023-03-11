import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState, useRef } from "react";
import { GestureResponderEvent } from "react-native";
import { MessageData } from ".";
import { RoundedButton, StyledInputContainer, StyledTextInput } from "./styles"

const SendButton: React.FC<{ onPress: (event: GestureResponderEvent) => void }> = ({ onPress }) => {
    return <RoundedButton size="35px" onPress={onPress}>
        <FontAwesome name="send" size={18} color="gray" />        
    </RoundedButton>
}
const AddButton: React.FC = () => {
    return <RoundedButton size="24px" borderColor='gray'>
        <AntDesign name="plus" size={19} color="gray" />        
    </RoundedButton>
}
const MessageInput: React.FC<{ msg: React.MutableRefObject<string> }> = ({ msg }) => {
    const [text, setText] = useState('');
    let hasContent = useRef(text.length > 0);

    const Placeholder = 'Digite sua mensagem...';
    const [placeholder, setPlaceholder] = useState<string | undefined>(Placeholder);

    return <StyledTextInput
        onFocus={() => { setPlaceholder(undefined); hasContent.current = true; }}
        onBlur={() => { setPlaceholder(Placeholder); text?.length == 0 && (hasContent.current = false); }}
        placeholder={placeholder}
        hasContent={hasContent.current}
        onChangeText={(value) => {
            msg.current = value;
            setText(value)
        }}
        value={text}
    />;
}

let renderPingPong = true;
const UserInput: React.FC<{ onSend: (message: MessageData) => void }> = ({ onSend }) => {
    const msg = useRef<string>('');
    
    const handleSubmit = () => {
        if(msg.current.length == 0) return;

        onSend({
            author: 'me',
            value: msg.current
        })

        msg.current = '';
        renderPingPong = !renderPingPong
    }

    return <StyledInputContainer>
        <MessageInput key={String(renderPingPong)} msg={msg}/>
        <SendButton onPress={handleSubmit}/>
    </StyledInputContainer>
}

export default UserInput;