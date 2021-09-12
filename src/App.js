import React, { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostLoadingComponent from "./components/PostLoading";
import Typography from "@material-ui/core/Typography";

function App() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jonghyeokblog.herokuapp.com/api`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <Typography
        Typography
        variant="h3"
        align="center"
        style={{ padding: "30px", fontWeight: 500 }}
      >
        Work
      </Typography>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}

export default App;
