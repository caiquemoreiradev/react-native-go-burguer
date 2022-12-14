import { AddOrderButton, AddOrderButtonTitle, Container, Content, DescriptionContainer, Header, HeaderTitle, InputsContainer, ProductAmount, ProductDescription, ProductDescriptionTitle, ProductFooter, ProductImage, ProductTitle } from "./styles";

import { Feather } from '@expo/vector-icons';
import theme from "../../theme";
import { useEffect, useState } from "react";

import uuid from 'react-native-uuid';

import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, TouchableOpacity } from "react-native";
import { SmallInput } from "../../components/SmallInput";

interface Params {
    productId: string;
}

interface ProductProps {
    id: string;
    amount: number;
    name: string;
    category: string;
    image: string;
    long_description: string;
}

export function ProductDetails() {

    const navigation = useNavigation();

    const route = useRoute();
    const { productId } = route.params as Params;

    const [product, setProduct] = useState<ProductProps>({} as ProductProps);

    const [productQuantity, setProductQuantity] = useState('');
    const [table, setTable] = useState('');

    function handleProductQuantity(value: string) {

        setProductQuantity(value);
    }

    function handleTableNumber(value: string) {

        setTable(value);
    }

    function handleNavigateGoBack() {

        navigation.goBack();
    }

    function handleAddOrder() {

        const data = {
            id: String(uuid.v4()),
            image: product.image,
            orderName: product.name,
            productQuantity: productQuantity,
            table: table,
            productStatus: 'preparing',
        }

        setProductQuantity('');
        setTable('');

        firestore()
            .collection('orders')
            .doc(data.id)
            .set(data)
            .then(() => {
                Alert.alert('Sucesso!', 'Pedido adicionado')
            })
            .catch((error) => console.log('ERRO >>>> ', error));

            navigation.navigate('Pedidos');
    }

    useEffect(() => {

        firestore()
            .collection('foods')
            .doc(productId)
            .get()
            .then(response => setProduct(response.data()));

    }, [])

    return (
        <Container>

            <Header>
                <TouchableOpacity onPress={handleNavigateGoBack}>
                    <Feather size={24} name='arrow-left' color={theme.COLORS.TITLE} />
                </TouchableOpacity>

                <HeaderTitle>Detalhes do prato</HeaderTitle>
            </Header>

            <Content>
                <ProductImage source={{ uri: product.image }} />
                <ProductTitle>{product.name}</ProductTitle>

                <DescriptionContainer>
                    <ProductDescriptionTitle>Descrição</ProductDescriptionTitle>

                    <ProductDescription>{product.long_description}</ProductDescription>
                </DescriptionContainer>

                <InputsContainer>
                    <SmallInput
                        title="Quantidade"
                        value={productQuantity}
                        handleChangeValue={handleProductQuantity}
                    />

                    <SmallInput
                        title="Mesa"
                        value={table}
                        handleChangeValue={handleTableNumber}
                    />
                </InputsContainer>

                <ProductFooter>
                    <ProductAmount>{product.amount}</ProductAmount>
                    <AddOrderButton>
                        <AddOrderButtonTitle onPress={handleAddOrder}>Adicionar ao pedido</AddOrderButtonTitle>
                    </AddOrderButton>
                </ProductFooter>
            </Content>

        </Container>
    )
}