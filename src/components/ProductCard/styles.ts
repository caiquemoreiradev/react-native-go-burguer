import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;

    padding: 16px;
    margin: 8px 0;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const LeftContent = styled.View``;

export const FoodTitle = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 18px;

    color: ${({ theme }) => theme.COLORS.SECONDARY_900};

    max-width: 180px;
`;

export const FoodDescription = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.SECONDARY_400};

    margin-bottom: 16px;

    max-width: 180px;
`;

export const FoodPrice = styled.Text`

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 18px;

    color: ${({ theme }) => theme.COLORS.SUCCESS_900};
`;

export const FoodImage = styled.Image`

    width: 100px;
    height: 100px;

    border-radius: 20px;
`;