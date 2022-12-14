import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { OrderProductCard } from '../../components/OrderProductCard';

import { Container, Content, Header, HeaderTitle, OrderRow, OrderTable, RowContent } from './styles';


interface OrderProps {
    id: string;
    table: string;
    orderName: string;
    category: string;
    image: string;
    productQuantity: string;
    productStatus:  'preparing' | 'finished' | 'delivered';
}

export function Orders() {

    const [ordered, setOrdered] = useState<OrderProps[]>([]);
    const [delivered, setDelivered] = useState<OrderProps[]>([]);
    const [finished, setFinished] = useState<OrderProps[]>([]);

    const [orders, setOrders] = useState<OrderProps[]>([]);

    useEffect(() => {

        const subscribe = firestore()
            .collection('orders')
            .onSnapshot(querySnapshot => {

                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as OrderProps[];

                setOrders(data);
            })

        return () => subscribe();
    }, [])

    useEffect(() => {

        let orderedArray : OrderProps[] = [];
        let deliveredArray : OrderProps[] = [];
        let finishedArray : OrderProps[] = [];

        orders.map(order => {

            if (order.productStatus === 'preparing') {

                orderedArray.push(order);
            }

            if (order.productStatus === 'delivered') {

                deliveredArray.push(order);
            }

            if (order.productStatus === 'finished') {

                finishedArray.push(order);
            }
        })

        setDelivered(deliveredArray);
        setOrdered(orderedArray);
        setFinished(finishedArray);

    }, [orders])

    return (
        <Container>

            <Header>
                <HeaderTitle>Pedidos</HeaderTitle>
            </Header>

            <Content showsVerticalScrollIndicator={false}>
                <OrderRow>
                    <OrderTable>Preparando</OrderTable>

                    <RowContent horizontal showsHorizontalScrollIndicator={false}>

                        {ordered.map(order => (
                            <OrderProductCard
                                name={order.orderName}
                                table={order.table}
                                quantity={order.productQuantity}
                                status={order.productStatus}
                                image={order.image}
                            />
                        ))}

                    </RowContent>
                </OrderRow>

                <OrderRow>
                    <OrderTable>Prontos</OrderTable>

                    <RowContent horizontal showsHorizontalScrollIndicator={false}>

                        {finished.map(order => (
                            <OrderProductCard
                                name={order.orderName}
                                table={order.table}
                                quantity={order.productQuantity}
                                status={order.productStatus}
                                image={order.image}
                            />
                        ))}

                    </RowContent>
                </OrderRow>

                <OrderRow>
                    <OrderTable>Entregues</OrderTable>

                    <RowContent horizontal showsHorizontalScrollIndicator={false}>

                        {delivered.map(order => (
                            <OrderProductCard
                                name={order.orderName}
                                table={order.table}
                                quantity={order.productQuantity}
                                status={order.productStatus}
                                image={order.image}
                            />
                        ))}

                    </RowContent>
                </OrderRow>
            </Content>

        </Container>
    )
}