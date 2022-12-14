import styled, { css } from "styled-components/native";

import LinearGradient from "react-native-linear-gradient";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1 },
    end: { x: 0.5, y: 0.5 }
}))`

    flex: 1;
    justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 48
    },
})`
    width: 100%;

    padding: 24px;
`;

export const Title = styled.Text`
    
    font-size: 32px;
    margin-bottom: 24px;
    align-self: flex-start;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.TITLE};
    `}
`;

export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
})`

    height: 260px;

    margin: 32px 24px;
`;