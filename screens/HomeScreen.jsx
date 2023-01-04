import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/core";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";

const HomeScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigation.replace("Login"))
      .catch((error) => alert(error.message));
  };
  return (
    <View style={tw("flex-[1] justify-center items-center")}>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity
        onPress={handleSignOut}
        style={tw("bg-blue-600 w-3/5 p-4 rounded-xl items-center mt-10")}
      >
        <Text style={tw("text-white text-base font-bold")}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
