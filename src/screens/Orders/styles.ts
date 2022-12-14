import styled, { css } from "styled-components/native";

export const Container = styled.View`

    flex: 1;
`;

export const Header = styled.View`

    padding: 48px 0 24px;

    width: 100%;

    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const HeaderTitle = styled.Text`

    font-size: 18px;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `};
`;

export const Content = styled.ScrollView`

    padding: 24px 0;
`;

export const OrderRow = styled.View`
     
    margin: 8px 0 0;
`;

export const OrderTable = styled.Text`

    margin: 24px;
     
    font-size: 18px;

    ${({ theme }) => css`

       font-family: ${theme.FONTS.MEDIUM};
       color: ${theme.COLORS.BLACK};
  `};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const RowContent = styled.ScrollView`

    padding: 0 32px 32px;
`;