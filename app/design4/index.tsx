import { Text, View } from "react-native";
// import {BottomNav} from "reactnativeepictrailsds/src";
import {BottomNav, EmptyState } from "reactnativeepictrailsds/src";
// import { EmptyState } from "reactnativeepictrailsds/src";
import { SocialMediaStack } from "reactnativeepictrailsds/src";
import StoryProgressBar from "reactnativeepictrailsds/src/socialmediastack/storyprogressbar";
import SocialMediaEngagement from "reactnativeepictrailsds/src/socialmediastack/socialmediaengagement";
import SocialMediaContainer from "reactnativeepictrailsds/src/socialmediastack/socialmediacontainer";
import { useState } from "react";
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

  const navItems = [
    {icon: 'home',label: 'Home',},
    {icon: 'speedometer',label: 'Trips',},
    {icon: 'add',label: 'Create',},
    {icon: 'chatbubble',label: 'Chat',},
    {icon: 'person',label: 'Me',}
  ]
    const icons = [
      { name: 'heart-outline', onPress: () => router.push('/design1') },
      { name: 'chatbox-outline', onPress: () => router.push('/design1') },
      { name: 'paper-plane-outline', onPress: () => router.push('/design1') },
    ];
    const [activeIndex, setActiveIndex] = useState<number>(0);

  const contentItems = [
      // Text with background color example
      { 
        type: 'text' as const,
        text: 'This is a text story with a custom background color!',
        backgroundColor: '#e74c3c'
      },
      // Another video
      { 
        type: 'image' as const,
        imageUri: require('@/assets/images/bike.png'),
        isLocal : true
      },
      { 
        type: 'text' as const,
        text: 'This is a text story with a custom background color!',
        backgroundColor: 'green'
      },
      // Another video
      { 
        type: 'image' as const,
        imageUri: require('@/assets/images/bike.png'),
        isLocal : true
      },
    ];
  return (
    <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
      <SocialMediaStack>
      <StoryProgressBar totalStories={contentItems.length} activeStoryIndex={activeIndex}/>
        <SocialMediaEngagement icons={icons}/>
        <BottomNav items={navItems} theme='dark'/>
        <SocialMediaContainer 
        contentItems={contentItems}
        duration={5000} 
        onActiveIndexChange={(index) => setActiveIndex(index)}
      />
      </SocialMediaStack>
    </View>
  );
}
