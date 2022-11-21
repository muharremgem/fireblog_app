import { useState } from "react";

export const BlogProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [image, setİmage] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  //blogData
  const [blogData, SetBlogData] = useState();

  
};
