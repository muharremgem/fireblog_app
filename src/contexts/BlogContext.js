import { onValue, push, ref, set } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../helpers/firebase";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textArea, setTextArea] = useState("");
  const [blogData, setBlogData] = useState(undefined);

  const handleSubmit = () => {
    const newPost = {
      title,
      image,
      textArea,
      username: auth.currentUser.email,
      userId: auth.currentUser.uid,
      logDate: new Date().getMonth() + new Date(),
    };
    saveTodoDataBase(newPost);
  };

  const saveTodoDataBase = (item) => {
    const blogRef = ref(db, "Blog");

    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      ...item,
    });
  };

  useEffect(() => {
    const blogRef = ref(db, "Blog");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArr = [];
      for (let id in data) {
        blogArr.push({ id, ...data[id] });
      }
      setBlogData(blogArr);
    });
  }, []);

  return (
    <BlogContext.Provider
      value={{
        title,
        setTitle,
        image,
        setImage,
        textArea,
        setTextArea,
        handleSubmit,
        blogData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
