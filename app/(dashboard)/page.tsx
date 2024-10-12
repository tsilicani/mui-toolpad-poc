"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button, Stack } from "@mui/material";
import { useDialogs, useNotifications } from "@toolpad/core";

export default function HomePage() {
  const dialogs = useDialogs();
  const notifications = useNotifications();
  return (
    <Stack sx={{ flexDirection: "column", gap: 2 }}>
      <Typography>
        Welcome to{" "}
        <Link href="https://mui.com/toolpad/core/introduction">
          Toolpad Core!
        </Link>
      </Typography>
      <Stack sx={{ flexDirection: "row", gap: 2 }}>
        <Button
          variant="contained"
          onClick={async () => {
            const confirmed = await dialogs.confirm("Are you sure?", {
              okText: "Yes",
              cancelText: "No",
            });
            if (confirmed) {
              await dialogs.alert("Then let's do it!");
            } else {
              await dialogs.alert("Ok, forget about it!");
            }
          }}
        >
          Confirm
        </Button>
        <Button
          variant="outlined"
          onClick={async () => {
            await notifications.show("This is an info notification");
          }}
        >
          Notify
        </Button>
      </Stack>
    </Stack>
  );
}
