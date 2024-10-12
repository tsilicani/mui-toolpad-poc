import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid2,
  Stack,
} from "@mui/material";

export default async function CommentsPage() {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = (await comments.json()) as {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
  return (
    <Stack sx={{ alignContent: "stretch" }}>
      <Grid2 container spacing={2}>
        {data.map((comment: any) => (
          <Grid2 key={comment.id} size={{ xs: 6, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardHeader title={comment.id.toString()} />
              <CardContent sx={{ flexGrow: 1 }}>{comment.body}</CardContent>
              <CardActions>
                <Button variant="outlined" fullWidth>
                  {comment.email}
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}
