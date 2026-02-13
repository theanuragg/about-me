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
              Founding Engineer → CTO
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
              Led end-to-end developement of a solana token launch platform integrated with Meteora DBC and DAMMv2
              enabling fair launches without custom AMMs or bounding curve- drove $20M+ aggregate trading volume
              across launched tokens.
            </p>
          </div>
          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3 ">
            <ChevronRight className=" mx-1.5 mt-0.5 h-4 w-4  flex-shrink-0 text-neutral-700" />
            <p className=" max-md:max-w-[90%]">
              Architected full token lifecycle: DBC pool creation, single-sided liquidity bootstrapping, configurable gradution thresholds automated Damm v2 migration, and LP locking - powered dozens of rapid, composable launches with jupiter and trition aggregator suuport
            </p>
          </div>
          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex flex-shrink-0 text-neutral-700" />
            <p className="max-md:max:w-[90%]">
              Implemented production-grade safety features including dynamic fees, multi-layered anti-snipe protections, whale caps, and rate-limiting- ensured fair distribution and reduced predatory acivity during  high-demand phase ( thousand of TPS).
            </p>
          </div>
          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex flex-shrink-0 text-neutral-700" />
            <p className=" max-md:max-w-[90%]">
              Delivered 99.99% uptime and zero-downtime deploys through reliable orchestration (Rust/TS + Meteora SDKs), real-time analytics (TVL/price/sniper tracking), and DevOps foundation (CI/CD, auto-scaling infra, alerting) — ensured platform resilience during peaks and rapid iteration.
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
              SRD Exchange
            </a>
          </div>
          <div className="mt-1 flex justify-between text-sm font-medium text-neutral-400">
            <p>Contract Developer</p>
            <div className="flex items-center gap-1 text-xs text-neutral-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>DEC 2025 – Present</span>
            </div>
          </div>
          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex flex-shrink-0 text-neutral-700" />
            <p className=" max-md:max-w-[90%]">
              Accelerated user onboarding and gasless transactions by integrating Paymaster with Particle Network wallet — enabled seamless, fee-sponsored interactions on the SRD DEX, boosting adoption for non-custodial trades.
            </p>
          </div>
          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex flex-shrink-0 text-neutral-700" />
            <p className=" max-md:max-w-[90%]">
              Owned end-to-end wallet integration for EVM/Solana compatibility, including AA (Account Abstraction) flows and secure key management — reduced friction in cross-chain swaps, improving UX and transaction success rates.

            </p>
          </div>
          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex flex-shrink-0 text-neutral-700" />
            <p className=" max-md:max-w-[90%]">
              Delivered production-ready features that enhanced DEX liquidity and security, contributing to platform growth amid high-volume trading environments.
            </p>
          </div>

        </div>
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
            <p>Contract Developer</p>
            <div className="flex items-center gap-1 text-xs text-neutral-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>May 2025 – Jun 2025</span>
            </div>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Delivered 2 polished, responsive Web3 sites from Figma in weeks (Next.js + Tailwind) — elevated UX to production quality, improving onboarding flow and user retention for a live product.
            </p>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              Built seamless Solana/EVM wallet + swap/pool interfaces (wagmi/RainbowKit) with real-time balances and transaction UX — reduced drop-offs and boosted engagement in DeFi interactions
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
              Drove platform growth through optimized, responsive UI (components, dark mode, mobile perf) — improved user satisfaction and retention for a scaling community tool.
            </p>
          </div>

          <div className="mt-1.5 flex items-start text-sm leading-tight text-neutral-500 max-md:mt-3">
            <ChevronRight className="mx-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-700" />
            <p className="max-md:max-w-[90%]">
              * Owned reliable infra and releases (AWS EC2 + DigitalOcean, autoscaling, Nginx/Certbot, GitHub Actions CI/CD) — enabled consistent weekly deploys with near-zero downtime, accelerating feature velocity from months to days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
