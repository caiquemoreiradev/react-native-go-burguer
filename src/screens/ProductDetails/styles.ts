import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`

    flex: 1;
`;

export const Header = styled.View`

    padding: 48px 24px 24px;

    width: 100%;

    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const HeaderTitle = styled.Text`

    font-size: 18px;
    margin-left: 16px;

    ${({ theme }) => css`

        font-family: ${theme.FONTS.MEDIUM};
        color: ${theme.COLORS.TITLE};
    `};
`;

export const Content = styled.ScrollView``;

export const ProductImage = styled.Image`

    height: 360px;
    width: 100%;
`;

export const ProductTitle = styled.Text`

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    margin-top: -16px;

    padding: 16px 24px;

    color: ${({ theme }) => theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 18px;
`;

export const DescriptionContainer = styled.View`

    padding: 24px;
`;

export const ProductDescriptionTitle = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 18px;

    margin-bottom: 16px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const ProductDescription = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 14px;
`;

export const InputsContainer = styled.View`

    padding: 8px 24px;

    margin-bottom: 16px;

    justify-content: space-between;

    flex-direction: row;

    width: 100%;
`;

export const ProductFooter = styled.View`

    padding: 8px 24px 24px;

    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ProductAmount = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 18px;

    color: ${({ theme }) => theme.COLORS.SUCCESS_900};
`;

export const AddOrderButton = styled(TouchableOpacity)`

    background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};

    padding: 16px;
    border-radius: 8px;

    align-items: center;
`;

export const AddOrderButtonTitle = styled.Text`

    color:  ${({ theme }) => theme.COLORS.TITLE};

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 14px;
`;