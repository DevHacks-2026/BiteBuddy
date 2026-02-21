import "@/global.css";
import { Slot } from "expo-router";
import Head from "expo-router/head";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Head>
        <title>BiteBuddy</title>
        <meta
          name="description"
          content="Find your lunch buddy"
        />
      </Head>
      <TooltipProvider>
        <Slot />
      </TooltipProvider>
    </SafeAreaProvider>
  );
}
