import { TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import theme from "../../theme";
import { categories } from "../../utils/categories";

import { SearchBar } from "../../components/SearchBar";
import { CategoryCard } from "../../components/CategoryCard";

import {
    CategoryHeader,
    CategorySection,
    CategorySectionContent,
    CategoryTitle,
    Container,
    Content,
    Greeting,
    GreetingMessage,
    Header,
    MenuHeader,
    RecommendedSection,
    Title,
    UserProfileImage
} from "./styles";
import { RecommendedList } from "../../components/RecommendedList";


export function Home() {

    return (
        <Container>

            <Header>
                <Greeting>
                    <UserProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/56305107?v=4' }} />
                    <GreetingMessage>Olá, Caique</GreetingMessage>
                </Greeting>

                <TouchableOpacity>
                    <MaterialIcons name="logout" color={theme.COLORS.PRIMARY_900} size={24} />
                </TouchableOpacity>
            </Header>

            <SearchBar
                onClear={() => { }}
                onSearch={() => { }}
            />

            <Content>
                <CategorySection>

                    <CategorySectionContent horizontal>

                        {categories.map(category => (
                            <CategoryCard
                                key={category.key}
                                title={category.name}
                                image={category.icon}
                                color={category.color}
                                categoryKey={category.key}
                            />
                        ))}
                    </CategorySectionContent>
                </CategorySection>

                <RecommendedSection>
                    <MenuHeader>
                        <Title>Recomendados</Title>
                    </MenuHeader>

                    <RecommendedList />
                </RecommendedSection>
            </Content>

        </Container>
    )
} 