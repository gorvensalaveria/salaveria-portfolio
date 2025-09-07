"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Record a new visit
    const pageUrl = window.location.href;

    fetch("/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageUrl }),
    }).then(() => {
      // After recording, fetch total visitors
      fetch("/api/visitors")
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    });
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold">Visitors</h2>
      {count === null ? <p>Loading...</p> : <p>Total Visitors: {count}</p>}
    </div>
  );
}
