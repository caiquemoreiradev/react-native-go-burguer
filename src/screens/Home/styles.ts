import styled, { css } from "styled-components/native";

export const Container = styled.View`

    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;

export const Header = styled.View`

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 32px 24px;
`;

export const Greeting = styled.View`

    flex-direction: row;
    align-items: center;

    padding: 24px 8px;
`;

export const UserProfileImage = styled.Image`

    width: 60px;
    height: 60px;

    margin-right: 8px;

    border-radius: 30px;
`;

export const GreetingMessage = styled.Text`

    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};

    color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const CategoryHeader = styled.View`

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 25px 24px;
    padding-bottom: 8px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const CategoryTitle = styled.Text`

    font-size: 20px;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const CategorySection = styled.View`

    width: 100%;

    margin-top: 24px;
`;

export const CategorySectionContent = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 24
    },
})``;

export const MenuHeader = styled.View`

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 4px 0 16px;
    padding-bottom: 8px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const MenuItemsNumber = styled.Text`

    font-size: 14px;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const RecommendedSection = styled.View`

    width: 100%;
    padding: 0 24px;

    margin-top: 24px;
`;

export const Title = styled.Text`

    font-size: 20px;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.REGULAR};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;