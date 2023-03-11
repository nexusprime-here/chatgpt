import { Platform } from "react-native";
import styled from "styled-components/native";

export const StyledText = styled.Text`
    color: ${p => p.theme.text};
`;
export const MessageContainer = styled.View<{ own?: boolean }>`
    background-color: ${p => p.theme.background};
    width: 100%;
    min-height: 40px;
    justify-content: center;
    align-items: ${p => p.own ? 'flex-end' : 'flex-start'};
    margin-bottom: 18px;
`;
export const MessageCloud = styled.View<{ own?: boolean }>`
    max-width: 70%;
    background-color: ${p => p.own ? p.theme.RightBubble : p.theme.LeftBubble};
    border-radius: 25px;
    margin: 2px 15px;
    padding: 10px;
    color: ${p => p.theme.text};
`;

export const StyledInputContainer = styled.View`
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 80%;
    height: 45px;
    margin: 15px;
    font-size: 15px;
    border-color: ${p => p.theme.shadow};
    background-color: ${p => p.theme.background2};
    border-radius: 25px;
    border-width: 1px;
`;

export const ReversedContainer = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? "padding" : 'height',
})`
    height: 100%;
    flex: 1;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${p => p.theme.background};
`;

export const StyledTextInput = styled.TextInput<{ hasContent: boolean }>`
    text-align: ${p => p.hasContent ? 'left' : 'center'};
    color: ${p => p.hasContent ? p.theme.text : p.theme.placeholderText};
    caret-color: ${p => p.hasContent ? p.theme.name === 'dark' ? 'white' : 'black' : 'transparent'};

    outline-style: none;
    width: 78%;
    height: 100%;
`;

export const RoundedButton = styled.TouchableOpacity<{ size: string, backgroundColor?: string, borderColor?: string }>`
    justify-content: center;
    align-items: center;
    background-color: ${p => p.backgroundColor ?? 'transparent'};
    border-radius: 100%;
    ${p => p.borderColor ? `
        border-width: 1.5px;
        border-color: ${p.borderColor};
    ` : ''}
    height: ${p => p.size};
    width: ${p => p.size};
`;

export const StyledScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
    border-color: ${p => p.theme.text};
    border-style: solid;
`;