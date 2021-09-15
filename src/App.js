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
    // const apiUrl = `http://127.0.0.1:8000/api`;

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
        style={{ padding: "5%", fontWeight: 500 }}
      >
        Portfolio
      </Typography>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}

export default App;
