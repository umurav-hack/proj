import { HomeHero } from "@/features/home/hero";
import { HomePromptInput } from "@/features/home/prompt-input";
import { SiteHeader } from "@/features/_layout/site-header";

export default function Home() {
  return (
    <div>
      <SiteHeader title="Home" />
      <HomeHero />
      <HomePromptInput />
    </div>
  );
}
