import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import firestore from '@react-native-firebase/firestore';

import { ProductCard } from "../ProductCard";

interface ProductProps {
    name: string;
    short_description: string;
    amount: string;
    image: string;
    id: string;
}

interface Props {
    category: string;
}

export function ProductsList({ category }: Props) {

    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {

        const subscribe = firestore()
            .collection('foods')
            .where('category', '==', category)
            .onSnapshot(querySnapshot => {

                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as ProductProps[];

                setProducts(data);
            })

        return () => subscribe();
    }, [])

    return (
        <FlatList
            data={products}
            style={{
                padding: 16,
                marginBottom: 118
            }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ProductCard
                    id={item.id}
                    amount={item.amount}
                    title={item.name}
                    image={item.image}
                    short_description={item.short_description}
                />
            )}
            showsVerticalScrollIndicator={true}
        />
    )
}