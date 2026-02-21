import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomBar from "./bottom-bar";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_GAP = 12;
const CARD_WIDTH = (SCREEN_WIDTH - 28 * 2 - CARD_GAP) / 2;

export default function Home() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons name="account" size={28} color="#C83B3B" />
            </View>
            <View>
              <Text style={styles.subtitle}>FIND YOUR BUDDY</Text>
              <Text style={styles.greeting}>Hi, Minji</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#374151" />
        </View>

        <View style={styles.searchBar}>
          <MaterialCommunityIcons name="magnify" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Find people or study spots..."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.grid}>
          <View style={[styles.card, { backgroundColor: "#E8D8D0" }]}>
            <View style={[styles.cardIcon, { backgroundColor: "#C83B3B" }]}>
              <MaterialCommunityIcons name="account-search-outline" size={20} color="#FFFFFF" />
            </View>
            <Text style={styles.cardTitle}>Find Mate</Text>
            <Text style={styles.cardSub}>Quick lunch buddy</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#E8D8D0" }]}>
            <View style={[styles.cardIcon, { backgroundColor: "#C83B3B" }]}>
              <MaterialCommunityIcons name="account-group-outline" size={20} color="#FFFFFF" />
            </View>
            <Text style={styles.cardTitle}>Form Group</Text>
            <Text style={styles.cardSub}>Host a table</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#E8D8D0" }]}>
            <View style={[styles.cardIcon, { backgroundColor: "#C83B3B" }]}>
              <MaterialCommunityIcons name="chat-outline" size={20} color="#FFFFFF" />
            </View>
            <Text style={styles.cardTitle}>Chats</Text>
            <Text style={styles.cardSub}>Active messages</Text>
          </View>

          <View style={[styles.card, { backgroundColor: "#E8D8D0" }]}>
            <View style={[styles.cardIcon, { backgroundColor: "#C83B3B" }]}>
              <MaterialCommunityIcons name="account-multiple-outline" size={20} color="#FFFFFF" />
            </View>
            <Text style={styles.cardTitle}>Friends</Text>
            <Text style={styles.cardSub}>34 online now</Text>
          </View>
        </View>
      </View>

      <BottomBar />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F0",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 70,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F5E6E0",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "600",
    color: "#C83B3B",
    letterSpacing: 1,
    marginBottom: 2,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1F2937",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#374151",
    marginLeft: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: CARD_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.1,
    borderRadius: 20,
    padding: 16,
    justifyContent: "flex-end",
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 2,
  },
  cardSub: {
    fontSize: 12,
    color: "#6B7280",
  },
});
