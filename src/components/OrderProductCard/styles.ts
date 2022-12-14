import styled, { css } from "styled-components/native";

interface StatusProps {
    status: 'preparing' | 'finished' | 'delivered';
}

export const Container = styled.View`

    width: 150px;

    margin: 24px 48px 0 0;
`;

export const ProductImage = styled.Image`

    width: 100%;
    height: 70px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const Content = styled.View`
    padding: 0 8px 16px;

    align-items: center;
    justify-content: space-between;

    height: 180px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const ProductName = styled.Text`
    margin-top: 16px;

    color: ${({ theme }) => theme.COLORS.BLACK};

    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const InfoContainer = styled.View`

    align-items: center;

    margin-top: 8px;
`;

export const TableNumber = styled.Text``;

export const ProductQuantity = styled.Text``;

export const StatusLabelContainer = styled.View<StatusProps>`

    margin-top: 16px;

    border-radius: 8px;

    padding: 8px 16px;

    ${({ theme, status }) => css`

        background-color: ${status === 'preparing' ? theme.COLORS.ALERT_900 :
            status === 'delivered' ? theme.COLORS.PRIMARY_900 :
                theme.COLORS.SUCCESS_900
        };
    `};
`;

export const StatusLabelTitle = styled.Text`

    color: ${({ theme }) => theme.COLORS.TITLE};

    font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;