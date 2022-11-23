import { push, ref, set } from "firebase/database";
import { createContext, useState } from "react";
import { db } from "../helpers/firebase";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textArea, setTextArea] = useState("");

  const saveTodoDataBase = (item) => {
    const blogRef = ref(db, "Blog");

    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      ...item,
    });
  };

  return (
    <BlogContext.Provider
      value={(title, setTitle, image, setImage, textArea, setTextArea)}
    >
      {children}
    </BlogContext.Provider>
  );
};
