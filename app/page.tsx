import HeaderNavigation from '@/components/landing/header-navigation';
import HeroIntroduction from '@/components/landing/hero-introduction';
import ExperienceSection from '@/components/landing/experience';
import ProjectsShowcase from '@/components/landing/projectshowcase';
import BlogPreview from '@/components/landing/blog-preview';
import CallToAction from '@/components/landing/call-to-action';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <div className="mx-auto max-w-3xl border-x border-dashed border-neutral-800 px-6">
        <HeaderNavigation />
        <HeroIntroduction />
        <ExperienceSection />
        <ProjectsShowcase />
        <BlogPreview />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}