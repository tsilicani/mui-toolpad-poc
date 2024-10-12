"use client";
import * as React from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CommentIcon from "@mui/icons-material/Comment";
import type { Navigation, Session } from "@toolpad/core";
import { AiFillAlipayCircle } from "react-icons/ai";

import theme from "../theme";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <AiFillAlipayCircle size={24} />,
  },
  {
    segment: "comments",
    title: "Comments",
    icon: <CommentIcon />,
  },
];

const BRANDING = {
  title: "Toolpad",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);
  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            branding={BRANDING}
            theme={theme}
          >
            {props.children}
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
