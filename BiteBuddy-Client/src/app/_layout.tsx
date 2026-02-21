import "@/global.css";
import { Slot } from "expo-router";
import Head from "expo-router/head";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout() {
  return (
    <>
      <Head>
        <title>BiteBuddy</title>
        <meta
          name="BiteBuddy"
          content="BiteBuddy is your go-to app for finding the perfect lunch companion."
        />
      </Head>
      <TooltipProvider>
        <Slot />
      </TooltipProvider>
    </>
  );
}
