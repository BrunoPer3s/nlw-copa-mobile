import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header";
import Logo from '../assets/logo.svg'
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {
  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title="Criar novo bolão" />
      <VStack mt={8} mx={5} alignItems='center'>
        <Logo />
        <Heading fontFamily="heading" color="white" my={8} fontSize="xl" textAlign="center">
          Crie seu próprio bolão da copa
          e compartilhe entre amigos!
        </Heading>
        <Input
          mb={2}
          placeholder="Qual o nome do seu bolão ?"
        />
        <Button title="CRIAR MEU BOLÃO" />
        <Text color="gray.200" fontSize='sm' textAlign='center' mt={4} px={10}>
          Após criar seu bolão, você receberá um código
          único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}