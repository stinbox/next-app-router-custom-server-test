"use client";

import { useEffect, useState } from "react";

const fetchMessage = async () => {
  const response = await fetch("/api/message");
  return response.json() as Promise<{ message: string }>;
};

export const ClientComponent: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h2>Message from the API server</h2>
      <p>{message}</p>
    </div>
  );
};
