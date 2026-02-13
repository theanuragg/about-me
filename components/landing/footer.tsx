'use client';

import { Copyright } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment visitor count when component mounts
    const incrementVisitors = async () => {
      try {
        const response = await fetch("/api/visitors", { method: "POST" });
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        setVisitorCount(1278); // Fallback value
      }
    };

    incrementVisitors();
  }, []);

  return (
    <footer className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-dashed border-neutral-800 py-5 md:flex-row md:items-center md:gap-0">
      <div className="flex flex-col gap-1.5 text-neutral-500">
        <p className="text-xs text-neutral-200">
          Designed &amp; Developed by{" "}
          <span className="font-semibold">Anurag</span>
        </p>
        <div className="flex items-center gap-1 text-xs">
          <Copyright className="h-3 w-3" />
          <p>2025. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
}