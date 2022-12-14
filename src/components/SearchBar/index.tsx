import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import theme from '../../theme';

import { Button, ButtonClear, Container, Input, InputArea } from './styles';

type Props = TextInputProps & {
    onSearch: () => void;
    onClear: () => void
};

export function SearchBar({ onSearch, onClear, ...rest }: Props) {

    return (
        <Container>

            <InputArea>
                <Input placeholder='pesquisar...' {...rest} />

                <ButtonClear onPress={onClear}>
                    <Feather name='x' size={16} />
                </ButtonClear>
            </InputArea>

            <Button onPress={onSearch}>
                <Feather name='search' size={18} color={theme.COLORS.SHAPE} />
            </Button>
        </Container>
    )
}