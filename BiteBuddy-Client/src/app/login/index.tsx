import { useRouter } from "expo-router/build/exports";
import { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const router = useRouter();

    const allowedDomains = ['myumanitoba.ca'];
    const emailPattern = new RegExp(`.+@(${allowedDomains.join('|')})$`);

    const validateEmail = (email: string) => {
      return emailPattern.test(email);
    };

    const handleEmailChange = (email) => {
      setEmail(email);
      setIsValid(validateEmail(email));
    };

    const styles = StyleSheet.create({
      view: {
        backgroundColor: '#1a202c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      },

      safeArea: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        padding: 20,
        width: '100%',
        maxWidth: 400,
      },

      input: {
        height: 50,
        marginBottom: 20,
        borderWidth: 2,
        padding: 10,
      },

      email: {
        borderWidth: 1, 
        borderColor: isValid || email === '' ? 'gray' : 'red'
      },

      h2: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20
      },

      label: {
        fontSize: 16, 
        marginBottom: 10
      },
    });

  return (
    <View style={styles.view}>
      <SafeAreaProvider style={styles.safeArea}>
        <SafeAreaView>
          <Text style={styles.h2}>Login</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, styles.email]}
            onChangeText={handleEmailChange}
            value={email}
            placeholder="username@myumanitoba.ca"
            keyboardType="email-address"
          />
          {!isValid && email !== '' && <Text style={{ color: 'red' }}>Invalid email format</Text>}

          <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry={true}
          />

          <Button
            title="Login"
            onPress={() => router.push('/')}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  ) ;
}
