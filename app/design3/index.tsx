import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import {
  BottomNav,
  Iconography,
  NavTabs,
  RectButton,
} from "reactnativeepictrailsds";
export default function Index() {
  const router = useRouter();

  const items = [
    { icon: "home", label: "Home" },
    { icon: "speedometer", label: "Trips" },
    { icon: "add", label: "Create" },
    { icon: "chatbubble", label: "Chat" },
    { icon: "person", label: "Me" },
  ];

  return (
    <View className="max-w-md" style={{margin:"auto", width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <View className="w-[80%] m-12">
        <NavTabs tabs={["Your Trips", "Archived"]} />
      </View>
      <RectButton label="click" onPress={() => router.push("/design4")} />
      <View className="w-[80%] m-4 p-4 bg-gray-100">
        <View style={{ height: 180, backgroundColor: "#abdbe3" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("@/assets/images/No-Rides-Logged-Yet.png")}
            resizeMode="cover"
          />
          <View className="absolute top-2 left-2 flex-row items-center">
            <Iconography type="avatar" initials="V" />
            <Text className="font-semibold mx-4 text-base">Vignesh</Text>
          </View>
        </View>
        <Text className="my-2 font-medium text-base">Trip to Ladak</Text>
        <View className="flex-row">
          {["S", "T", "A"].map((char, i) => (
            <View
              key={i}
              style={{
                marginLeft: i === 0 ? 0 : -15, // Overlap
                zIndex: 10 + i, // Stack in order
              }}
            >
              <Iconography type="avatar" initials={char} />
            </View>
          ))}
          <Text className="my-1 mx-2 text-gray-600">
            Preetham, Vignesh & 1 other
          </Text>
        </View>
      </View>
      <View className="w-[80%] mx-8 my-2 p-4 bg-gray-100">
        <View style={{ height: 180, backgroundColor: "#abdbe3" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("@/assets/images/No-Rides-Logged-Yet.png")}
            resizeMode="cover"
          />
          <View className="absolute top-2 left-2 flex-row items-center">
            <Iconography type="avatar" initials="V" />
            <Text className="font-semibold mx-4 text-base">Vignesh</Text>
          </View>
        </View>
        <Text className="my-2 font-medium text-base">Trip to Kashmir</Text>
        <View className="flex-row">
          {["S", "T", "A"].map((char, i) => (
            <View
              key={i}
              style={{
                marginLeft: i === 0 ? 0 : -15, // Overlap
                zIndex: 10 + i, // Stack in order
              }}
            >
              <Iconography type="avatar" initials={char} />
            </View>
          ))}
          <Text className="my-1 mx-2 text-gray-600">
            Preetham, Vignesh & 1 other
          </Text>
        </View>
      </View>
      <BottomNav items={items} />
    </View>
  );
}
