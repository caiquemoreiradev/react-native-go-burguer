import styled from "styled-components/native";

interface Props {
    color: string;
}

export const Container = styled.TouchableOpacity`

    margin-right: 16px;

    align-items: center;

    border-radius: 8px;
`;

export const Icon = styled.Image`

    height: 40px;
    width: 40px;

    margin-bottom: 8px;

    z-index: 9999;
`;

export const ColorContainer = styled.View<Props>`

    width: 105px;
    padding: 8px 16px;
    padding-top: 32px;

    align-items: center;

    margin-top: -32px;

    border-radius: 8px;

    background-color: ${({ color }) => color};

`;

export const Title = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};

    color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;