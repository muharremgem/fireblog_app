import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textArea, setTextArea] = useState("");


  


  return (
    <BlogContext.Provider
      value={(title, setTitle, image, setImage, textArea, setTextArea)}
    >
      {children}
    </BlogContext.Provider>
  );
};
