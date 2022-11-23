import React, { useContext } from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
  const { blogData } = useContext(BlogContext);

  return (
    <Layout>
      <div className="">
        <div className="flex justify-center items-center  text-5xl mt-5">
          <p className="">Dashboard</p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center  mt-5">
          {blogData?.map((item, idx) => (
            <div key={idx}>
              <BlogCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
