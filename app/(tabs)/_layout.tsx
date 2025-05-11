import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              size={28}
              name={focused ? "bookmark" : "bookmark-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              size={28}
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "heart.fill" : "heart"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "bell.fill" : "bell"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "person.fill" : "person"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
