import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 my-4">The page you're looking for doesn't exist.</p>
      <Button color="primary" size="md" onClick={() => navigate("/")}>
        Go To Home
      </Button>
    </div>
  );
};

export default NotFound;
