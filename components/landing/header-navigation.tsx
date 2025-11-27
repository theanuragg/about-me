import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const HeaderNavigation = () => {
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
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="border border-dashed border-neutral-800 px-1.5 py-1 text-sm text-neutral-400 transition-colors duration-300 hover:bg-neutral-900 hover:border-neutral-700 hover:text-neutral-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavigation;