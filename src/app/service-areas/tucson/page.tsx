import { cityConfigs } from "@/lib/city-configs";
import CityPageTemplate from "@/components/city-page-template";

const config = cityConfigs["tucson"];

export const metadata = {
  title: `Mobile Laser Tag & Party Games in ${config.name}, AZ | Altered Combat`,
  description: `${config.name}'s mobile gaming experts. Tactical laser tag, VR, Nerf wars & water wars. Veteran-owned.`,
};

export default function Page() {
  return <CityPageTemplate config={config} />;
}
