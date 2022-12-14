import { Container, Input, InputContainer, InputTitle } from "./styles";

interface Props {
    title: string;
    value: string;
    handleChangeValue: (value: string) => void;
}

export function SmallInput({ title, value, handleChangeValue }: Props) {

    return (
        <Container>
            <InputTitle>{title}</InputTitle>

            <InputContainer>
                <Input
                    value={value}
                    onChangeText={(e) => handleChangeValue(e)}
                    keyboardType='numeric'
                />
            </InputContainer>
        </Container>
    )
}