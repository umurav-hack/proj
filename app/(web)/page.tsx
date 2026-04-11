import { HomeHero } from "@/features/home/hero";
import { HomePromptInput } from "@/features/home/prompt-input";
import { SectionCards } from "@/features/section-cards";
import { SiteHeader } from "@/features/site-header";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <HomeHero />
      <HomePromptInput />
    </div>
  );
}
