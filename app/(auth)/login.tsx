import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Login = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 ">
        <Text className="text-center"></Text>
      </View>
      <View className={`items-center mt-${height * 0.12}`}></View>
      {/* logo container */}
      <View
        className={`w-60 h-60 rounded-2xl bg-${COLORS.primary}/20 justify-center items-center mb-20`}
      >
        <Ionicons name="leaf" size={32} color={COLORS.primary} />
      </View>
    </SafeAreaView>
  );
};
export default Login;
