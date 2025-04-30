import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import login from "../../register/login";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await login(email, password);
      console.log(userCredential.user);
      router.push("../../(tabs)/home");
    } catch (error) {
      console.error("Login failed:", error);
      setWrongCredentials(true);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-dark">
      <View className="flex-1 px-4">
        {/* Header */}
        <View className="items-center mt-8">
          <Text className="text-white text-2xl font-pbold">Welcome Back</Text>
          <Text className="text-gray-light text-base font-pregular mt-2">
            Sign in to continue
          </Text>
        </View>

        {/* Form */}
        <View className="mt-8">
          <View className="mb-4">
            <Text className="text-white font-pmedium mb-2">Email</Text>
            <TextInput
              className="bg-gray-extradark text-white p-4 rounded-lg font-pregular"
              placeholder="Enter your email"
              placeholderTextColor="#757575"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-6">
            <Text className="text-white font-pmedium mb-2">Password</Text>
            <TextInput
              className="bg-gray-extradark text-white p-4 rounded-lg font-pregular"
              placeholder="Enter your password"
              placeholderTextColor="#757575"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          {wrongCredentials && (
            <View className="mb-6 items-center justify-center">
              <Text className="text-red-500 font-pmedium text-center">
                Wrong credentails :(
              </Text>
            </View>
          )}

          <TouchableOpacity
            className="bg-blue rounded-lg py-4 items-center"
            onPress={() => {
              console.log(email, password);
              handleLogin();
            }}
          >
            <Text className="text-white font-pmedium text-base">Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-4 items-center"
            onPress={() => router.push("./register")}
          >
            <Text className="text-gray-light font-pregular">
              Don't have an account?{" "}
              <Text className="text-blue font-pmedium">Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
