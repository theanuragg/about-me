"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h2 className="relative mt-4 w-fit max-w-lg px-1.5 py-0.5 font-display text-xl font-medium tracking-tight text-neutral-300">
      <div className="absolute inset-0 h-full w-full bg-neutral-800">
        <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
        <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
        <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
        <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
      </div>
      <span className="relative z-10">{title}</span>
    </h2>
  );
};

const blogPosts = [
  {
    href: "https://x.com/theaanuragg/status/1987196314090938819?s=20",
    title: "How to Build a Token Launchpad on Solana",
    date: "2025",
    description:
      "Deep dive into building a token launchpad on Solana blockchain. Learn the technical architecture, smart contract patterns, and best practices for launching tokens...",
  },
  {
    href: "https://x.com/theaanuragg/status/2020209353861820421?s=20",
    title: "Surviving 731K Requests as a Solo Dev",
    date: "2026",
    description:
      "Around half a million requests slammed the site in a short burst. Bots, scrapers, snipers, the whole crypto circus showed up uninvited As a solo dev juggling everything from Next.js frontend to Solana RPC integrations, Kubernetes orchestration, and even the occasional meme tweet, this was my welcome to production moment. No team, no war room — just me",
  },
  {
    href: "https://x.com/theaanuragg/status/1988994680273633635?s=20",
    title: "The Hidden Revenue Drain in Memecoin Launches",
    date: "2025",
    description:
      "Uncover the often-overlooked costs and revenue leaks in memecoin launches. Analyze fee structures, token distribution mechanics, and strategies to maximize returns...",
  },
  {
    href: "https://x.com/theaanuragg/status/1998305604608414153?s=20",
    title: "We Just Survived a 48-Hour DDoS Attack",
    date: "2025",
    description:
      "For the past four days, our infrastructure has been under constant pressure from a persistent DDoS attack While we eventually stabilized everything, the attacker is still actively attempting to probe our system and bypass our protections.  This post documents what happened, how they got around our rate limiting, what DigitalOcean reported to us, and how we fixed it.",
  },

  {
    href: "https://x.com/theaanuragg/status/2007530580582511093?s=20",
    title: "Wash Trading Exposed: wSOL on Aerodrome",
    date: "2026",
    description:
      "1.86M transactions, with a screenshot showing rapid back-and-forth swaps in the SOL/USDC pool (0xb30540172f1b37d1ee1d109e49f883e935e69219) on Aerodrome. You suspected 99.8% wash-traded volume from three addresses, netting $50-150/hr in AERO per participant vs. just $32K organic.",
  },
  {
    href: "https://x.com/theaanuragg/status/1993732145538585093?s=20",
    title: "Pump.fun: The Extraction Engine",
    date: "2025",
    description:
      "Analyze how Pump.fun operates as a token launch platform. Explore the mechanics, incentives, and economics behind one of Solana's most popular launchpad protocols...",
  },
];

const BlogPreview = () => {
  return (
    <div className="py-5">
      <SectionHeader title="Sharing What I Learn" />
      <div className="mt-6 space-y-4">
        {blogPosts.map((post) => (
          <Link key={post.href} href={post.href} className="group block">
            <div className="mt-6 flex items-center justify-between font-semibold text-neutral-200 max-md:items-start">
              <h2 className="font-display text-lg font-medium tracking-wide text-neutral-200 max-md:text-base max-md:max-w-[190px]">
                {post.title}
                <ArrowUpRight className="inline-block h-5 w-5 ml-1 text-neutral-800 transition-colors duration-200 group-hover:text-blue-600" />
              </h2>
              <div className="flex shrink-0 items-center gap-1 text-xs text-neutral-400">
                <CalendarDays className="inline-block h-[1em] w-[1em]" />
                <span>{post.date}</span>
              </div>
            </div>
            <p className="mt-1 max-w-3/4 text-sm leading-tight text-neutral-500 max-md:max-w-full">
              {post.description}
            </p>
          </Link>
        ))}
        <div className="flex items-center justify-end max-md:mt-2">
          {/* <Link
            href="/blog"
            className="group flex w-fit items-center gap-1 rounded border border-neutral-800 bg-neutral-900 px-1 text-sm text-neutral-500"
          >
            <span className="tracking-tight">View all blogs</span>
            <ArrowRight className="h-[1em] w-[1em] transition-colors duration-200 group-hover:text-neutral-200" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;