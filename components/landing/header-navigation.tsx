

'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



const HeaderNavigation = () => {
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
    <div className="flex h-16 items-center justify-between border-b border-dashed border-neutral-800">
      <Link href="/">
        <Image
          src="https://pbs.twimg.com/profile_images/1958743589321637888/BPwjTA9k_400x400.jpg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-4 rounded-full"
        />
      </Link>
      <div className="flex gap-2">
        <div className="flex flex-col items-start gap-1.5 text-xs text-neutral-500 md:items-end">
        <p>
          Visitors{" "}
          <span className="font-medium text-neutral-400">
            #{visitorCount ?? "..."}
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;