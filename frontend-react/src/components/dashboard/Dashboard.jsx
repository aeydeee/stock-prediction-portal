import axios from "axios";
import { useEffect } from "react";
import axiosInstance from "../../axiosinstance";

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view/");
        console.log("Success:", response.data);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchProtectedData();
  }, []);
  return <div className="text-light container">Dashboard</div>;
};

export default Dashboard;
