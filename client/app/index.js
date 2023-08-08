import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS } from "../constants";
import { Home } from "../components";

const App = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightWhite
            }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerTitle: ""
                }}
            />

            <View>
                <Home />
            </View>


        </SafeAreaView>
    )
}

export default App;