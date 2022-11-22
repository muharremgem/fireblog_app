import React from "react";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex justify-center items-center  text-5xl mt-5">
          <p className="">Dashboard</p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center  mt-5">
          <BlogCard className="flex  mt-5" />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
