import styled from "styled-components/native";

export const Container = styled.View`

    width: 150px;
`;

export const InputTitle = styled.Text`

    padding: 0 8px;

    
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 14px;

    color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const InputContainer = styled.View`

    padding: 8px 16px;

    align-items: center;

    border-radius: 8px;

    margin: 8px;

    background-color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Input = styled.TextInput``;