import { KeyboardAvoidingView, Platform } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Brand, Container, Content, Title } from "./styles";

import brandImg from '../../assets/brand.png';

export function SignIn() {

    return (
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >

                <Content>

                    <Brand source={brandImg} />

                    <Title>Login</Title>

                    <Input
                        placeholder="email"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <Input
                        placeholder="senha"
                        type="secondary"
                        secureTextEntry
                    />

                    <Button title="entrar" />
                </Content>

            </KeyboardAvoidingView>

        </Container>
    )
} 