import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color="#fff" />
            </View>
            <View>
              <Text style={styles.subtitle}>FIND YOUR BUDDY</Text>
              <Text style={styles.greeting}>Hi, Minji</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={26} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            placeholder="Find people or study spots..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconCircle, { backgroundColor: "#FADBD8" }]}>
              <MaterialIcons name="people" size={24} color="#C0392B" />
            </View>
            <Text style={styles.cardTitle}>Find Mate</Text>
            <Text style={styles.cardSub}>Quick lunch buddy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconCircle, { backgroundColor: "#FADBD8" }]}>
              <MaterialIcons name="group-add" size={24} color="#C0392B" />
            </View>
            <Text style={styles.cardTitle}>Form Group</Text>
            <Text style={styles.cardSub}>Host a table</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconCircle, { backgroundColor: "#FADBD8" }]}>
              <Ionicons name="chatbubble" size={22} color="#C0392B" />
            </View>
            <Text style={styles.cardTitle}>Chats</Text>
            <Text style={styles.cardSub}>Active messages</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconCircle, { backgroundColor: "#FADBD8" }]}>
              <MaterialIcons name="people" size={24} color="#C0392B" />
            </View>
            <Text style={styles.cardTitle}>Friends</Text>
            <Text style={styles.cardSub}>34 online now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    padding: 20,
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
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#3B5998",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 11,
    color: "#C0392B",
    fontWeight: "700",
    letterSpacing: 1,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a1a1a",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 24,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 14,
  },
  card: {
    width: "47%",
    backgroundColor: "#FDF2F0",
    borderRadius: 16,
    padding: 18,
    minHeight: 150,
    justifyContent: "flex-end",
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 2,
  },
  cardSub: {
    fontSize: 12,
    color: "#777",
  },
});
