import { SiteHeader } from "@/features/_layout/site-header";
import { HomeHero } from "@/features/home/hero";
import { HomePromptInput } from "@/features/home/prompt-input";

export default function Home() {
  return (
    <div>
      <SiteHeader title="Home" />
      <HomeHero />
      <HomePromptInput />
    </div>
  );
}
