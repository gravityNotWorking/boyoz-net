import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { db } from "../../firebase/Config";
import Post from "./Post";

const Posts = () => {
  const { postList, setPostList } = useContext(AppContext);
  const postsCollRef = collection(db, "posts");
  const { id } = useParams();
  const getPosts = async () => {
    const data = await getDocs(postsCollRef);

    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    getPosts();
  }, [id, postList]);
  return (
    <div>
      {postList.map((post, idx) => (
        <Post post={post} key={idx} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default Posts;
