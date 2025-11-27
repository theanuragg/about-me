import { Dot, Mail, Twitter } from 'lucide-react';

const HeroIntroduction = () => {
  return (
    <div className="pb-5 pt-7">
      <h1 className="font-display text-4xl text-primary">
        GM, I'm Anurag
      </h1>
      <h2 className="font-medium text-neutral-500">
        frontend
        <Dot className="mx-1 inline-block h-3 w-3 text-neutral-700" />
        backend
        <Dot className="mx-1 inline-block h-3 w-3 text-neutral-700" />
        devops
        <Dot className="mx-1 inline-block h-3 w-3 text-neutral-700" />
        smart contracts
      </h2>
      <h2 className="mt-2 max-w-lg text-sm font-medium tracking-tight text-neutral-500">
        They call me <span className="text-neutral-100">Pixel</span>. What kind of name is that? I craft smooth interfaces, power them with logic, and deploy like a reflex.
      </h2>
      <div className="mt-4 flex w-full flex-col justify-center tracking-tight text-neutral-400 max-md:gap-2.5">
        <h2 className="align-middle">
          Available for freelance or full-time roles. Slide into my
          <a href="https://x.com/theaanuragg" target="_blank" rel="noopener noreferrer">
            <span className="mx-1.5 inline-flex cursor-pointer items-center gap-0.5 rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900">
              <Twitter size="1em" className="text-neutral-200" />
              DMs
            </span>
          </a>
          or
          <a href="mailto:anurags9693@gmail.com">
            <span className="mx-1.5 inline-flex cursor-pointer items-center gap-0.5 rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900">
              <Mail size={14} className="text-neutral-200" />
              Email
            </span>
          </a>
          me.
        </h2>
        <h2 className="align-middle">
          <a href="https://github.com/theanuragg" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex cursor-pointer items-center gap-0.5 rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900">
              GitHub
            </span>
          </a>
        
          ,{' '}
          <a href="https://drive.google.com/file/d/1wpYJ8oAaNJGI4psgYqvDF-o7p42wT3Oa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex cursor-pointer items-center gap-0.5 rounded bg-neutral-800 px-1 py-0.5 text-xs tracking-normal text-neutral-200 transition-colors duration-300 hover:bg-neutral-900">
              Resume
            </span>
          </a>
          ? Yep, they’re all unlocked if you’re curious.
        </h2>
      </div>
    </div>
  );
};

export default HeroIntroduction;