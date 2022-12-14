import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import { ProductsList } from '../../components/ProductsList';
import theme from '../../theme';

import { Container, Content, Header, HeaderTitle } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { categories } from '../../utils/categories';

interface Params {
    category: string;
}

export function CategoryScreen() {

    const navigation = useNavigation();

    const route = useRoute();
    const { category } = route.params as Params;

    const [categoryTitle, setCategoryTitle] = useState('');

    function handleNavigateGoBack() {

        navigation.goBack();
    }

    useEffect(() => {

        categories.map(item => {

            if (item.key === category) {

                setCategoryTitle(item.name)
            }
        })
    }, [])

    return (
        <Container>

            <Header>
                <TouchableOpacity onPress={handleNavigateGoBack}>
                    <Feather size={24} color={theme.COLORS.TITLE} name='arrow-left' />
                </TouchableOpacity>
                <HeaderTitle>{categoryTitle}</HeaderTitle>
            </Header>

            <ProductsList category={category} />
        </Container>
    )
}