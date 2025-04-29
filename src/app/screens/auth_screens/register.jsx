import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-gray-dark">
      <View className="flex-1 px-4">
        {/* Header */}
        <View className="items-center mt-8">
          <Text className="text-white text-2xl font-pbold">Create Account</Text>
          <Text className="text-gray-light text-base font-pregular mt-2">
            Sign up to get started
          </Text>
        </View>

        {/* Form */}
        <View className="mt-8">
          <View className="mb-4">
            <Text className="text-white font-pmedium mb-2">Full Name</Text>
            <TextInput
              className="bg-gray-extradark text-white p-4 rounded-lg font-pregular"
              placeholder="Enter your full name"
              placeholderTextColor="#757575"
              value={name}
              onChangeText={setName}
            />
          </View>

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

          <View className="mb-4">
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

          <View className="mb-6">
            <Text className="text-white font-pmedium mb-2">
              Confirm Password
            </Text>
            <TextInput
              className="bg-gray-extradark text-white p-4 rounded-lg font-pregular"
              placeholder="Confirm your password"
              placeholderTextColor="#757575"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="bg-blue rounded-lg py-4 items-center"
            onPress={() => router.push("/(tabs)/home")}
          >
            <Text className="text-white font-pmedium text-base">Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-4 items-center"
            onPress={() => router.push("/Register/login")}
          >
            <Text className="text-gray-light font-pregular">
              Already have an account?{" "}
              <Text className="text-blue font-pmedium">Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
