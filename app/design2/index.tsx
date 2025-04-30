import { View } from "react-native";
import { Image } from "react-native";
import { BottomNav, EmptyState } from "reactnativeepictrailsds";
import { useRouter } from "expo-router";
export default function Index() {
    const router = useRouter();

    const items = [
        {icon: 'home',label: 'Home',},
        {icon: 'speedometer',label: 'Trips',},
        {icon: 'add',label: 'Create',},
        {icon: 'chatbubble',label: 'Chat',},
        {icon: 'person',label: 'Me',}
      ]
      return (
        <View className="max-w-md" style={{margin:"auto", width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
          <EmptyState message="Sorry, we couldn't find that connection."
              action="primary"
              description="Try changing up your search a bit. We'll try harder next time."
              label="Try Again"
              onPress={() => router.push('/design3') }
            >
              <View className="w-full"
                style={{height: 180,backgroundColor: '#e6e6e6'}}
              >
                <Image style={{ width: '100%', height: '100%' }} source={require('@/assets/images/No-Rides-Logged-Yet.png')} resizeMode="cover" ></Image>
              </View>
            </EmptyState>
          <BottomNav items={items} />
        </View>
      );
}