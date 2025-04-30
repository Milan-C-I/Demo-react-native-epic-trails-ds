import { View } from "react-native";
import { BottomNav } from "reactnativeepictrailsds";
import { SocialMediaStack } from "reactnativeepictrailsds";
import { StoryProgressBar } from "reactnativeepictrailsds";
import { SocialMediaEngagement } from "reactnativeepictrailsds";
import { SocialMediaContainer } from "reactnativeepictrailsds";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const navItems = [
    { icon: "home", label: "Home" },
    { icon: "speedometer", label: "Trips" },
    { icon: "add", label: "Create" },
    { icon: "chatbubble", label: "Chat" },
    { icon: "person", label: "Me" },
  ];
  const icons = [
    { name: "heart-outline", onPress: () => router.push("/design1") },
    { name: "chatbox-outline", onPress: () => router.push("/design1") },
    { name: "paper-plane-outline", onPress: () => router.push("/design1") },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const contentItems = [
    // Text with background color example
    {
      type: "text" as const,
      text: "This is a text story with a custom background color!",
      backgroundColor: "#e74c3c",
    },
    // Another video
    {
      type: "image" as const,
      imageUri: require("@/assets/images/bike.png"),
      isLocal: true,
    },
    {
      type: "text" as const,
      text: "This is a text story with a custom background color!",
      backgroundColor: "green",
    },
    // Another video
    {
      type: "image" as const,
      imageUri: "data:image/jpeg;base64,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",
      isLocal: false,
    },
  ];
  return (
    <View
      className="max-w-md text-black"
      style={{
        margin: "auto",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <SocialMediaStack>
        <StoryProgressBar
          totalStories={contentItems.length}
          activeStoryIndex={activeIndex}
        />
        <SocialMediaEngagement icons={icons} />
        <BottomNav items={navItems} theme="dark" />
        <SocialMediaContainer
          contentItems={contentItems}
          duration={5000}
          onActiveIndexChange={(index) => setActiveIndex(index)}
          index = {activeIndex}
        />
      </SocialMediaStack>
    </View>
  );
}
