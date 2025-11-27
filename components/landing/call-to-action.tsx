'use client'


const CallToAction = () => {
  return (
    <>
    <div className="py-5">
      <h2 className="relative mt-4 w-fit max-w-lg px-1.5 py-0.5 text-xl font-medium tracking-tight text-neutral-300">
        <div className="absolute inset-0 h-full w-full bg-neutral-800">
          <div className="absolute -left-px -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-500"></div>
          <div className="absolute -right-px -top-px h-1 w-1 animate-pulse rounded-full bg-neutral-500"></div>
          <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-500"></div>
          <div className="absolute -bottom-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-500"></div>
        </div>
        <span className="relative z-10">Looking for a Developer? Let’s Talk.</span>
      </h2>
      <p className="mt-5 text-sm font-medium text-neutral-500">
        Think I’m the right fit? Let’s make it official —{' '}
        <a
          href="https://cal.com/anurag-prjlyx/15min"
          className="text-sm font-bold hover:text-blue-500 hover:underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          schedule a meeting.
        </a>
      </p>
    </div>
    </>
  );
};

export default CallToAction;