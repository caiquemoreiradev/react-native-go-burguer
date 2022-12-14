import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Header = styled.View`

    flex-direction: row;
    align-items: center;

    padding: 48px 24px 32px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const HeaderTitle = styled.Text`

    font-size: 20px;

    margin-left: 24px;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `};
`;

export const Content = styled.ScrollView`
`;