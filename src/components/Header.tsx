import { useNavigation } from "@react-navigation/native";
import { HStack, Text, Box } from "native-base";
import { CaretLeft, Export } from "phosphor-react-native";
import { ButtonIcon } from "./ButtonIcon";

interface HeaderProps {
  title: string
  showBackButton?: boolean
  showShareButton?: boolean
  onShare?: () => void
}

export function Header({ title, showBackButton = false, showShareButton = false, onShare }: HeaderProps) {
  const { navigate } = useNavigation()
  const EmptyBoxSpace = () => (<Box w={6} h={6} />)

  return (
    <HStack alignItems="flex-end" h={24} bgColor="gray.800" px={5} pb={5} >
      <HStack w="full" justifyContent="space-between" alignItems="center">
        {
          showBackButton
            ? <ButtonIcon icon={CaretLeft} onPress={() => navigate('pools')} />
            : <EmptyBoxSpace />
        }
        <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
          {title}
        </Text>
        {
          showShareButton
            ? <ButtonIcon icon={Export} onPress={onShare} />
            : <EmptyBoxSpace />
        }
      </HStack>
    </HStack >
  );
}