import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
                go to onboarding
            </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">
                go to sign-up
            </Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">
                go to sign-in
            </Link>
            <Link href={{
                pathname: "/subscriptions/[id]",
                params: {id: "spotify"}
            }}>
                Spotify
            </Link>
            <Link href={{
                pathname: "/subscriptions/[id]",
                params: {id: "claude"},
            }}>
                Claude Max subscription
            </Link>
        </View>
    );
}