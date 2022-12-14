import { useNavigation } from "@react-navigation/native";
import { ColorContainer, Container, Icon, Title } from "./styles";

interface CardProps {
    title: string;
    image: string;
    color: string;
    categoryKey: string;
}

export function CategoryCard({ title, image, color, categoryKey }: CardProps) {

    const navigation = useNavigation();

    function handleCategoryScreen() {

        navigation.navigate('CategoryScreen', { category: categoryKey })
    }

    return (
        <Container onPress={handleCategoryScreen}>
            <Icon source={{ uri: image }} />

            <ColorContainer color={color}>
                <Title>{title}</Title>
            </ColorContainer>
        </Container>
    )
} 