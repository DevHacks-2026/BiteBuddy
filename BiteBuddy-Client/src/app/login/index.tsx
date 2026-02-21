import { useRouter } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  const emailPattern = new RegExp(`.+@(myumanitoba.ca)$`);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValid(emailPattern.test(text));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        <View style={styles.videoSection}>
          <Video
            source={require("../../../assets/video-crop.mp4")}
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            isLooping
            isMuted
          />
          <Text style={styles.overlayText}>BiteBuddy</Text>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, { borderColor: isValid || !email ? "#D1D5DB" : "red" }]}
            onChangeText={handleEmailChange}
            value={email}
            placeholder="username@myumanitoba.ca"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {!isValid && email !== "" && (
            <Text style={styles.errorText}>Invalid email format</Text>
          )}

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/")}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <Pressable
            style={styles.registerButton}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
  },
  videoSection: {
    height: 450,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    overflow: "hidden",
  },
  overlayText: {
    position: "absolute",
    top: 80,
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 14,
    fontSize: 15,
    backgroundColor: "#F9FAFB",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "hsl(44, 100%, 59%)",
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  loginButtonText: {
    color: "hsl(var(--primary-foreground))",
    fontSize: 16,
    fontWeight: "700",
  },
  registerButton: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButtonText: {
    color: "hsl(var(--primary-foreground))",
    fontSize: 16,
    fontWeight: "700",
  },
});