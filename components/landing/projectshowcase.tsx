import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
	{
		title: "Yellowstone-Vixen",
		liveUrl: "",
		image: "",
		logo: "",
		githubUrl: "https://github.com/theanuragg/yellowstone-vixen",
		description: (
			<div className="space-y-2">
				<p>
					Real-time Solana token indexing & trading system.{" "}
					<strong>Yellowstone-Vixen</strong> streams Solana swap events (Meteora
					DAMM v2 + DBC), processes trades in real time, generates candlesticks
					(klines), and serves everything via WebSockets and REST API. Built to
					turn raw blockchain firehose into clean, actionable data for traders,
					bots, and dApps.
				</p>
				<p>
					As a solo project, this was brutally hard to get right. Yellowstone
					Geyser streams are unforgiving — frequent disconnects, duplicates, high
					TPS spikes (thousands/sec), and Solana network chaos demanded
					rock-solid reliability. I engineered custom retry/idempotency logic,
					ordered processing, and state management to avoid data loss or
					corruption during peaks.
				</p>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Why It's Tough (and What I Overcame)
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>
						Unreliable streams → exponential backoff + deduping + ordered
						ingestion
					</li>
					<li>
						High-volume event processing → Rust for sub-ms latency, Redis as fast
						bus
					</li>
					<li>
						Race conditions in mint tracking → atomic ops and custom locking
					</li>
					<li>
						Real-time klines without lagging → in-memory aggregation + efficient
						DB writes
					</li>
					<li>
						Production resilience → Dockerized services, health checks,
						horizontal scaling
					</li>
				</ul>
				<p className="mt-2 text-neutral-400">
					The result: A battle-tested system that handles live loads cleanly,
					powers real-time dashboards/bots, and avoids common pitfalls that kill
					most indexing setups.
				</p>
			</div>
		),
		technologies: [
			"Rust",
			"Solana",
			"Redis",
			"Docker",
			"WebSockets",
			"Meteora",
			"Yellowstone Geyser",
		],
	},
	{
		title: "Trading Terminal",
		liveUrl: "",
		image: "",
		logo: "",
		githubUrl: "https://github.com/theanuragg/Trading-Terminal",
		description: (
			<div className="space-y-2">
				<p>
					Terminal-first crypto market intelligence & trading platform for
					Solana. <strong>Trading Terminal</strong> is a fast, lightweight,
					terminal-based tool for real-time Solana market monitoring,
					intelligence, and execution. Built in pure Rust for speed and
					reliability — because GUIs are slow and terminals never crash under
					pressure.
				</p>
				<p>
					Solo project grind: Solana&apos;s TPS chaos + terminal constraints
					made this tough. Streaming live data (trades, prices, liquidity),
					handling wallet/tx signing securely, rendering clean TUI views without
					lag, and ensuring zero dropped events during network spikes required
					heavy optimization. Custom async handling, efficient state management,
					and low-latency RPC polling were key to making it feel snappy.
				</p>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Why It's Hard (and What I Solved)
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>
						High-throughput Solana streams → robust reconnection, deduping,
						ordered processing
					</li>
					<li>
						Terminal UX limits → custom TUI rendering (ratatui-inspired) for
						charts, orderbooks, trades
					</li>
					<li>
						Secure trading → safe key management, tx building/signing without
						exposing secrets
					</li>
					<li>
						Real-time without freezing → async Rust + efficient polling/caching
					</li>
					<li>Prod resilience → graceful degradation during RPC outages</li>
				</ul>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Key Features
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>Real-time price feeds, orderbook, recent trades</li>
					<li>Live token/liquidity monitoring</li>
					<li>Wallet integration & tx execution (swap, limit orders)</li>
					<li>Custom TUI: charts, logs, multi-pane views</li>
					<li>Configurable alerts & hotkeys</li>
				</ul>

			</div>
		),
		technologies: ["Rust", "Solana", "Tokio", "Ratatui"],
	},
	{
		title: "VanityGPU",
		liveUrl: "",
		image: "",
		logo: "",
		githubUrl: "https://github.com/theanuragg/VanityGPU",
		description: (
			<div className="space-y-2">
				<p>
					Solana-native vanity address generator powered by AIDP GPUs.{" "}
					<strong>VanityGPU</strong> lets teams submit Base58 patterns
					(prefix/suffix/regex) and get matched Solana (Ed25519) vanity
					addresses via GPU-accelerated brute-force search. Private keys
					delivered securely and non-custodially — no service ever sees
					plaintext secrets.
				</p>
				<p>
					Solo-built beast: Offloading Ed25519 key search to GPUs is
					computationally insane (58^k complexity for k-char prefix), plus
					Solana&apos;s strict Base58 alphabet. Integrating AIDP GPUs required
					custom job queuing, proof-of-compute attestations, encrypted delivery
					(user pubkey encryption + zeroization), and anti-phishing policies.
					Handling enterprise needs (webhooks, rate limits, audit logs, on-chain
					verification) while keeping it secure and performant was a grind.
				</p>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Why It's Tough (and What I Solved)
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>
						Exponential search space → AIDP GPU offload + batched jobs for
						feasible generation
					</li>
					<li>
						Security model → Non-custodial: encrypt privkey client-side, zeroize
						server-side; signed attestations prove compute
					</li>
					<li>
						Pattern complexity → Sanitized bounded regex + policy enforcement to
						prevent abuse/impersonation
					</li>
					<li>
						Delivery reliability → Webhook payloads + optional on-chain
						attestation events
					</li>
					<li>
						Prod ops → Queue (Redis/SQS), monitoring (Prometheus/Grafana),
						scalable API/workers
					</li>
				</ul>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Key Features
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>
						Prefix/suffix/regex patterns (e.g., "ANU...", "...XYZ",
						"^(DAO)[1-9A-HJ-NP-Za-km-z]&#123;2&#125;")
					</li>
					<li>
						Non-custodial privkey delivery (encrypted with user pubkey)
					</li>
					<li>
						Proof-of-compute attestations (job_id, pattern, digests, AIDP
						metadata, worker sig)
					</li>
					<li>Webhook + on-chain event delivery</li>
					<li>
						Enterprise controls: per-tenant webhooks, HMAC, rate limits, pattern
						policies
					</li>
				</ul>

			</div>
		),
		technologies: ["Rust", "TypeScript", "Node.js", "Redis", "CUDA"],
	},
	{
		title: "xandeum-app",
		liveUrl: "https://xandeum-app.vercel.app/dashboard/nodes",
		image: "",
		logo: "",
		githubUrl: "https://github.com/theanuragg/xandeum-app",
		description: (
			<div className="space-y-2">
				<p>
					Real-time analytics & monitoring dashboard for Xandeum pNodes.{" "}
					<strong>xandeum-app</strong> is the central observability platform for
					Xandeum&apos;s global distributed node network — think Solana validator
					dashboards (Stakewiz/Validators.app) but for pNodes. Delivers
					sub-second insights into 1000+ nodes: performance, uptime, latency,
					stake, geographic distribution, leaderboards, alerts, and predictive
					analytics.
				</p>
				<p>
					Solo-built at scale: Real-time ingestion from thousands of pNodes via
					custom pRPC was brutal — handling network partitions, data spikes,
					ordering guarantees, and sub-100ms P95 latency globally required heavy
					optimization. Custom XDN scoring (weighted stake/uptime/latency/risk),
					time-series partitioning in Postgres, multi-layer caching (Redis +
					SWR), and WebSocket streaming pushed the stack hard.
				</p>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Why It's Tough (and What I Solved)
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>
						Massive distributed data firehose → event-driven pRPC ingestion +
						ordered processing
					</li>
					<li>
						Low-latency global queries → DB partitioning (time/geo), read
						replicas, Redis caching
					</li>
					<li>
						Complex scoring & viz → Proprietary XDN algorithm + interactive
						Mapbox heatmaps, Recharts
					</li>
					<li>
						Reliability under load → 99.9% uptime SLA, rate limiting, anomaly
						detection
					</li>
					<li>
						Enterprise ops → API keys/auth, audit logs, AI assistant (Gemini)
						for insights
					</li>
				</ul>
				<div className="mt-2 text-xs font-semibold text-neutral-400">
					Key Features
				</div>
				<ul className="list-disc space-y-1 pl-4 text-neutral-500 marker:text-neutral-600">
					<li>Real-time node metrics & network health score</li>
					<li>Interactive geo-heatmaps & leaderboards</li>
					<li>XDN performance scoring algorithm</li>
					<li>Alerting, incident logs, trend forecasting</li>
					<li>
						Live WebSocket updates + API (node inventory, stats, heatmap)
					</li>
					<li>AI-powered guidance (Google Gemini integration)</li>
				</ul>
			</div>
		),
		technologies: ["Next.js", "PostgreSQL", "Redis", "pRPC"],
	},
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

						<div className="flex-1">
							<div className="flex items-center justify-between">
								<div className="flex items-center justify-baseline space-x-1">
									<span className="project-title tracking-wide text-neutral-200">
										{project.title}
									</span>

								</div>
								<div className="flex items-center gap-1 text-sm text-neutral-300">
									{project.liveUrl && (
										<>
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="cursor-pointer rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900"
											>
												Live
											</a>
											{project.githubUrl && (
												<span className="font-bold text-neutral-500">|</span>
											)}
										</>
									)}
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="cursor-pointer rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900"
										>
											GitHub
										</a>
									)}
								</div>
							</div>
							<div className="my-2 text-xs leading-tight text-neutral-500">
								{project.description}
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