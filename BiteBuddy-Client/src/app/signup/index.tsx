"use dom"

import DOMProvider from "@/components/dom-provider"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Picker } from "@react-native-picker/picker"
import { useRouter } from "expo-router";

export default function Signup() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: {
            day: "",
            month: "",
            year: "",
        },
        major: "",
        gender: "",
    })
    const router = useRouter();

    const handlePressed = () => {
        const res = fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
        }).then((response) => {
            if (response.ok) {
                router.push("/");
            }
        }).catch((error) => {
            console.error("Signup error:", error);
        });
    }

    const genderSelectOptions = [
        { label: "Select your gender", value: "" },
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Non-binary", value: "nonbinary" },
        { label: "Prefer not to say", value: "na" },
    ]

    return (
        <DOMProvider>
            <SafeAreaProvider>
                <SafeAreaView>
                    <ScrollView className="px-8 py-10 w-full max-w-[400px] mx-auto">
                        <Text className="text-2xl font-bold mb-4">Sign up</Text>
                        <View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">
                                    Email
                                </Label>
                                <TextInput
                                    className="border border-gray-400 rounded-sm p-2"
                                    autoCapitalize="none"
                                    autoComplete="off"
                                    placeholder="Email"
                                    placeholderTextColor="#999"
                                    value={formState.email}
                                    onChangeText={(text) =>
                                        setFormState({ ...formState, email: text })
                                    }
                                />
                            </View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">Password</Label>
                                <TextInput
                                    className="border border-gray-400 rounded-sm p-2"
                                    autoCapitalize="none"
                                    autoComplete="off"
                                    placeholder="Password"
                                    placeholderTextColor="#999"
                                    secureTextEntry
                                    value={formState.password}
                                    onChangeText={(text) =>
                                        setFormState({ ...formState, password: text })
                                    }
                                />
                            </View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">First Name</Label>
                                <TextInput
                                    className="border border-gray-400 rounded-sm p-2"
                                    autoCapitalize="words"
                                    autoComplete="name"
                                    placeholder="First Name"
                                    placeholderTextColor="#999"
                                    value={formState.firstName}
                                    onChangeText={(text) =>
                                        setFormState({ ...formState, firstName: text })
                                    }
                                />
                            </View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">Last Name</Label>
                                <TextInput
                                    className="border border-gray-400 rounded-sm p-2"
                                    autoCapitalize="words"
                                    autoComplete="name"
                                    placeholder="Last Name"
                                    placeholderTextColor="#999"
                                    value={formState.lastName}
                                    onChangeText={(text) =>
                                        setFormState({ ...formState, lastName: text })
                                    }
                                />
                            </View>
                        </View>
                        <View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">Birthday</Label>
                                <View className="flex-row justify-between mb-4">
                                    <View>
                                        <Text className="text-sm mb-1" >Day</Text>
                                        <TextInput
                                            className="max-w-20 border border-gray-400 rounded-sm p-2"
                                            keyboardType="number-pad"
                                            placeholder="01"
                                            placeholderTextColor="#999"
                                            value={formState.dob.day}
                                            onChangeText={(text) =>
                                                setFormState({ ...formState, dob: { ...formState.dob, day: text } })
                                            }
                                        />
                                    </View>
                                    <View>
                                        <Text className="text-sm mb-1" >Month</Text>
                                        <TextInput
                                            className="max-w-20 border border-gray-400 rounded-sm p-2"
                                            keyboardType="number-pad"
                                            placeholder="01"
                                            placeholderTextColor="#999"
                                            value={formState.dob.month}
                                            onChangeText={(text) =>
                                                setFormState({ ...formState, dob: { ...formState.dob, month: text } })
                                            }
                                        />
                                    </View>
                                    <View>
                                        <Text className="text-sm mb-1" >Year</Text>
                                        <TextInput
                                            className="max-w-20 border border-gray-400 rounded-sm p-2"
                                            keyboardType="number-pad"
                                            placeholder="2024"
                                            placeholderTextColor="#999"
                                            value={formState.dob.year}
                                            onChangeText={(text) =>
                                                setFormState({ ...formState, dob: { ...formState.dob, year: text } })
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">Major</Label>
                                <TextInput
                                    className="border border-gray-400 rounded-sm p-2"
                                    autoCapitalize="words"
                                    autoComplete="off"
                                    placeholder="Major"
                                    placeholderTextColor="#999"
                                    value={formState.major}
                                    onChangeText={(text) =>
                                        setFormState({ ...formState, major: text })
                                    }
                                />
                            </View>
                            <View className="mb-4">
                                <Label className="text-base font-bold mb-2">Gender</Label>
                                <Picker
                                    className="border border-gray-400 rounded-sm p-2"
                                    selectedValue={formState.gender}
                                    onValueChange={(itemValue) =>
                                        setFormState({ ...formState, gender: itemValue })
                                    }
                                >
                                    {
                                        genderSelectOptions.map((option) => (
                                            <Picker.Item
                                                key={option.value}
                                                label={option.label}
                                                value={option.value}
                                            />
                                        ))
                                    }
                                </Picker>
                            </View>
                        </View>
                        <Pressable
                            className="bg-primary mt-4 py-5 rounded-2xl items-center"
                            onPress={handlePressed}>
                            <Text className="text-primary-foreground text-base font-bold">Sign up</Text>
                        </Pressable>
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </DOMProvider>
    )
}
