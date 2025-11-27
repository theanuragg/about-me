import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { title } from "process";
import { log } from "console";

const projects = [
	{
		title: "Relayer",
		liveUrl: "https://relayer.theaanurag.xyz/",
    logo: "https://relayer.theaanurag.xyz/_next/image?url=%2Fdiamond1.png&w=828&q=75",
    image: "https://relayer.theaanurag.xyz/coins.svg",
		githubUrl: "https://github.com/theanuragg/Relayer",
		description:
			"Relayer is a relationship layer for blockchain — a visual interface that shows how accounts are connected and interact over time. Designed for devs, users, and analysts, it brings context to raw on-chain data without needing to sift through complex transaction logs.",
		technologies: ["Solana", "Anchor", "React", "TypeScript", "heliusApi", "zustand", "TailwindCSS", "D3.js"],
	},
	{
		title: "DPin Uptime",
		liveUrl: "https://uptime.theaanurag.xyz/",
    image: "https://uptime.theaanurag.xyz/_next/image?url=%2Ftools2.jpg&w=3840&q=75",
		githubUrl: "https://github.com/theanuragg/UPtime-monitoring", 
		description:
			"DPin Uptime is a SaaS platform designed to monitor website uptime and ensure your online services are running smoothly. Currently, the project is under development, and we have launched a landing page to introduce the service and collect early interest.",
		technologies: ["React", "Node.js", "Express", "prisma", "PostgreSQL", "TailwindCSS" ]
	},{
    title: "PPM",
    image: "https://avatars.githubusercontent.com/u/237366558?s=96&v=4",
    logo: "https://avatars.githubusercontent.com/u/237366558?s=96&v=4",
    githubUrl: "https://github.com/people-peridication-market",
    description:
      "A decentralized prediction market platform that allows users to create and trade on the outcome of events using blockchain technology.",
    technologies: ["Solana", "React", "TypeScript", "Next.js", "TailwindCSS", "Anchor", "orcale", "Rust", "Web3.js", "anchor", "codama" ],
  }
	
];

const SectionHeader = ({ title }: { title: string }) => (
	<h2 className="section-header relative mt-4 w-fit px-1.5 py-0.5 tracking-tight text-neutral-300">
		<div className="absolute inset-0 -z-10 h-full w-full bg-neutral-800" />
		<div className="absolute -left-px -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
		<div className="absolute -right-px -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
		<div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
		<div className="absolute -bottom-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-500" />
		<span className="relative z-10">{title}</span>
	</h2>
);

const ProjectsShowcase = () => {
	return (
		<div className="py-5">
			<SectionHeader title="Things I've Built" />

			<div className="mt-6">
				{projects.map((project) => (
					<div
						key={project.title}
						className="mb-4 flex w-full justify-between gap-5 border border-dashed border-neutral-800 p-4 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-900/30 max-md:flex-col max-md:gap-2"
					>
						<Image
							src={project.image || ""}
							alt={`${project.title} Image`}
							width={300}
							height={300}
							className="rounded object-cover max-md:w-full"
						/>
						<div className="flex-1">
							<div className="flex items-center justify-between">
								<div className="flex items-center justify-baseline space-x-1">
									<span className="project-title tracking-wide text-neutral-200">
										{project.title}
									</span>
									<div className="border border-neutral-800 p-0.5">
										<Image
											src={project.logo || ""}
											alt={`${project.title.toLowerCase()} logo`}
											width={15}
											height={15}
										/>
									</div>
								</div>
								<div className="flex items-center gap-1 text-sm text-neutral-300">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900"
									>
										Live
									</a>
									<span className="font-bold text-neutral-500">|</span>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900"
									>
										GitHub
									</a>
								</div>
							</div>
							<p className="my-2 text-xs leading-tight text-neutral-500">
								{project.description}
							</p>
							<p className="my-1 text-sm font-medium text-neutral-400">
								Technologies Used:
							</p>
							<div className="mt-1.5 flex flex-wrap gap-1">
								{project.technologies.map((tech) => (
									<div
										key={tech}
										className="cursor-pointer rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900"
									>
										{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex items-center justify-end">
				{/* <Link
					href="/projects"
					className="group flex w-fit items-center gap-1 rounded border border-neutral-800 bg-neutral-900 px-1 text-sm text-neutral-500 transition-colors"
				>
					<span className="tracking-tight">View all projects</span>
					<ArrowRight className="h-[1em] w-[1em] transition-colors duration-200 group-hover:text-neutral-200" />
				</Link> */}
			</div>
		</div>
	);
};

export default ProjectsShowcase;