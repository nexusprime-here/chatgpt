import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Icon = styled(AntDesign).attrs(p => ({ color: p.theme.text }))`
    padding-left: 20px;
`;

const StyledText = styled.Text`
    font-size: 25px;
    grid-area: T;
    text-align: center;
    font-family: 'Roboto';
    color: ${p => p.theme.text};
`

const Container = styled.View`
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    backdrop-filter: blur(5px);
`

const LeftSide = styled.View`width: 33%;`
const Center = styled.View`width: 33%;`
const RightSide = styled.View`width: 33%;`

const Header: React.FC<{ title: string }> = (props) => {
    return <Container>
        <LeftSide>
            <TouchableOpacity>
                <Icon name="arrowleft" size={25} />
            </TouchableOpacity>
        </LeftSide>

        <Center>
            <StyledText>{props.title}</StyledText>
        </Center>

        <RightSide />
    </Container>
}

export default Header;