'use client'

import Image from "next/image";
import { CalendarDays, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  return (
    <div className="py-5">
      <h2 className="relative mt-4 w-fit px-1.5 py-0.5 font-display text-xl font-medium tracking-tight text-neutral-200">
        <div className="absolute inset-0 h-full w-full bg-neutral-800">
          <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
          <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
          <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
          <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
        </div>
        <span className="relative z-10">Places I’ve Made an Impact</span>
      </h2>

      <div className="pt-5 space-y-6">
        {/* OnlyFounders */}
        <div>
          <div className="flex items-baseline space-x-1">
            <a
              href="https://onlyfounders.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl font-medium tracking-wide text-neutral-200 hover:text-accent-blue hover:underline"
            >
              OnlyFounders
            </a>
            <div className="w-fit border border-neutral-800 bg-black">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ff5b1a95-6cf0-45bd-bc52-3246da2b7bc3-shivamworks-tech/assets/images/images_2.png"
                alt="onlyfounders"
                width={18}
                height={18}
              />
            </div>
          </div>

          <div className="mt-1 flex justify-between text-sm font-medium text-neutral-400">
            <p>
              Founding Engineer
              <span className="ml-1.5 w-fit rounded bg-neutral-800 px-1.5 py-0.5 text-xs font-normal text-neutral-200 max-md:hidden">
                Token Launchpad — First-time builders
              </span>
            </p>
            <div className="flex items-center gap-1 text-xs text-neutral-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Present</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Building a token launchpad tailored for first-time founders — built on
              Meteora with DBC and DAMMv2 integrations, focused on smooth onboarding
              and token lifecycle tooling.
            </p>
          </div>
        </div>

        {/* DeepRoot */}
        <div>
          <div className="flex items-baseline space-x-1">
            <a
              href="https://www.telexcoin.earth/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl font-medium tracking-wide text-neutral-200 hover:text-accent-blue hover:underline"
            >
              DeepRoot
            </a>
          </div>

          <div className="mt-1 flex justify-between text-sm font-medium text-neutral-400">
            <p>Frontend Web3 Developer</p>
            <div className="flex items-center gap-1 text-xs text-neutral-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>May 2025 – Jun 2025</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Converted 2 Figma designs into responsive, production-ready Web3 sites
              using Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Integrated wallet connection with wagmi & rainbowkit for Solana and EVM
              users; implemented swap/pool UI with token selection, balance fetch and
              improved UX for transactions.
            </p>
          </div>
        </div>

        {/* Algo Prep */}
        <div>
          <div className="flex items-baseline space-x-1">
            <a
              href="https://www.algoprep.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl font-medium tracking-wide text-neutral-200 hover:text-accent-blue hover:underline"
            >
              Algo Prep
            </a>
          </div>

          <div className="mt-1 flex justify-between text-sm font-medium text-neutral-400">
            <p>Community Manager → Promoted to Full-Stack Developer</p>
            <div className="flex items-center gap-1 text-xs text-neutral-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Aug 2023 – Dec 2024</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Developed responsive UI components, implemented dark mode, and optimized
              loading times for mobile and desktop.
            </p>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Managed deployments on AWS EC2 & DigitalOcean (Nginx, Route 53, Certbot),
              set up autoscaling, and drove CI/CD with GitHub Actions for weekly
              releases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;