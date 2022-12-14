import { Container, Content, InfoContainer, ProductImage, ProductName, ProductQuantity, StatusLabelContainer, StatusLabelTitle, TableNumber } from "./styles";

interface Props {
    name: string;
    quantity: string;
    table: string;
    status: 'preparing' | 'finished' | 'delivered';
    image: string;
}

export function OrderProductCard({ name, quantity, table, status, image }: Props) {

    return (
        <Container>
            <ProductImage source={{ uri: image }} />

            <Content>
                <ProductName>{name}</ProductName>

                <InfoContainer>
                    <TableNumber>Mesa {table}</TableNumber>
                    <ProductQuantity>Quantidade: {quantity}</ProductQuantity>
                </InfoContainer>

                {status === 'preparing' && (
                    <StatusLabelContainer status={status}>
                        <StatusLabelTitle>Preparando</StatusLabelTitle>
                    </StatusLabelContainer>
                )}

                {status === 'finished' && (
                    <StatusLabelContainer status={status}>
                        <StatusLabelTitle>Pronto</StatusLabelTitle>
                    </StatusLabelContainer>
                )}

                {status === 'delivered' && (
                    <StatusLabelContainer status={status}>
                        <StatusLabelTitle>Entregue</StatusLabelTitle>
                    </StatusLabelContainer>
                )}

            </Content>
        </Container>
    )
}