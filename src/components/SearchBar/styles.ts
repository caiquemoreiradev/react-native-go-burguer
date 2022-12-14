import { TextInput, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`

    width: 100%;

    flex-direction: row;
    align-items: center;
    margin-top: -30px;

    padding: 0 24px;
`;

export const InputArea = styled.View`

    flex: 1;
    flex-direction: row;
    align-items: center;

    border-top-left-radius: 8px;
    border-top-right-radius: 0;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 0;

    ${({ theme }) => css`

        background-color: ${theme.COLORS.TITLE};
        border: 1px solid ${theme.COLORS.SHAPE};
    `}
`;

export const Input = styled(TextInput)`

    width: 100%;
    height: 50px;

    padding: 8px 24px;

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const ButtonClear = styled(TouchableOpacity)`
    margin-right: 7px;
`;

export const Button = styled(TouchableOpacity)`

    width: 72px;
    height: 52px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};

    border-top-left-radius: 0;
    border-top-right-radius: 8px;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 8px;
`;