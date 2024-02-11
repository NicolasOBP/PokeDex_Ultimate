import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListStack } from "./stack";

type RouteKeys = keyof RootStackParamListStack;
export type PropsNav<RoutName extends RouteKeys> = StackScreenProps<
  RootStackParamListStack,
  RoutName
>;
