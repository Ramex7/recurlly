import {View, Text} from 'react-native'
import {Link, useLocalSearchParams} from "expo-router";

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>()
    return (
        <View>
            <Text> subscription: {id} </Text>
            <Link href="/">go back</Link>
        </View>
    )
}
    export default SubscriptionDetails
