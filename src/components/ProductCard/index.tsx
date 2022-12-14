import { useNavigation } from "@react-navigation/native";
import { Container, FoodDescription, FoodImage, FoodPrice, FoodTitle, LeftContent } from "./styles";

interface Props {
    title: string;
    short_description: string;
    amount: string;
    image: string;
    id: string;
}

export function ProductCard({ title, short_description, amount, image, id }: Props) {

    const navigation = useNavigation();

    function handleProductScreen() {

        navigation.navigate('ProductDetails', { productId: id })
    }

    return (
        <Container onPress={handleProductScreen}>

            <LeftContent>
                <FoodTitle>{title}</FoodTitle>
                <FoodDescription>{short_description}</FoodDescription>
                <FoodPrice>{amount}</FoodPrice>
            </LeftContent>

            <FoodImage
                resizeMode="cover"
                source={{ uri: image }}
            />
        </Container>
    )
}