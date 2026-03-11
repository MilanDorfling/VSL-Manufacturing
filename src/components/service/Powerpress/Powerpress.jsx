import React from "react";
import { VideoContainer } from "../../home";
import {
  ServiceShell,
  ServiceSection,
  ServiceHeader,
  ServiceCopy,
  ExpandableImageSections,
  ServiceContactButton,
} from "..";
import { powerpressHero, powerpressImageSections } from "./index";

const PowerPress = () => {
  return (
    <ServiceShell className="items-center justify-center py-10">
      <ServiceSection className="py-5 sm:pt-12 md:pt-20 pb-30 flex flex-col items-center">
        <ServiceHeader title={powerpressHero.title} titleClassName="mb-15" />
        <VideoContainer
          src={powerpressHero.videoSrc}
          poster={powerpressHero.videoPoster}
          title={powerpressHero.videoTitle}
        />
        <ServiceCopy className="text-center mb-2 mt-15 max-w-4xl text-white/80 font-medium">
          {powerpressHero.description}
        </ServiceCopy>
      </ServiceSection>

      <ExpandableImageSections
        sections={powerpressImageSections}
        showPlateHeaders
        outlineColor="rgb(59, 130, 246)"
      />

      <ServiceContactButton className="mt-12" />
    </ServiceShell>
  );
};

export default PowerPress;