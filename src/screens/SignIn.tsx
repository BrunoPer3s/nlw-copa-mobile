import Logo from '../assets/logo.svg';
import { Center, Icon, Text } from 'native-base';
import { Button } from '../components/Button';
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from '../hooks/useAuth';

export function SignIn() {
  const { signIn, user } = useAuth()

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        onPress={signIn}
        title='Entrar com o google'
        type='SECONDARY'
        leftIcon={<Icon as={Fontisto}
          name="google"
          color="white"
          size="md"
          mr={'2.5'}
        />}
        mt={12}
      />
      <Text color="white" textAlign="center" mt={6}>
        Não utilizamos nenhuma informação além{'\n'} do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}