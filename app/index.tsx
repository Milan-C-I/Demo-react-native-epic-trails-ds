import { Text, View } from "react-native";
import { SocialLogin, TypeDoc } from "reactnativeepictrailsds";
import { NormalInput } from "reactnativeepictrailsds";
import EpicTrailsLogo from "@/assets/images/Epictrails-logo.svg";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View className="max-w-md" style={{margin:"auto", width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <EpicTrailsLogo width={250} height={120} />
      <Text className="text-xl font-bold">Login</Text>
      <View className="w-[80%] m-4">
      <Text className="my-2">Login</Text>
      <NormalInput placeholder="Email" Size="full"/>
      <Text className="my-2 text-gray-600">user@email.com</Text>
      <Text className="my-2">Password</Text>
      <NormalInput Size="full"/>
      </View>
      <TypeDoc  buttonLabel="Login" label="I agree to the terms and conditions." size="large"
        onClick={() => router.push('/design2')}
      />
      <Text className="font-medium">or</Text>
     <SocialLogin email={false} google apple
        onEmailSignIn={() => console.log('Email sign-in')}
        onGoogleSignIn={() => console.log('Google sign-in')}
        onFacebookSignIn={() => console.log('Facebook sign-in')}
        onAppleSignIn={() => console.log('Apple sign-in')}
      />
    </View>
  );
}
