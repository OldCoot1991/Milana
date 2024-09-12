import {
    BgAboutUseBottomContentCard,
  BgAboutUseTopContentCard,
  ContainerCardAboutUse,
  ContainerCardAboutUseBottom,
  ImageAboutUseBottomContentCard,
  ImageAboutUseTopContentCard,
} from "@/app/ui/AboutUseTopContent";

export const CardTopAboutUse = () => {
  return (
    <ContainerCardAboutUse>
      <ImageAboutUseTopContentCard className="bg-about-use-top-content" />
      <BgAboutUseTopContentCard />
    </ContainerCardAboutUse>
  );
};

export const CardBottomAboutUse = () => {
  return (
    <ContainerCardAboutUseBottom>
      <ImageAboutUseBottomContentCard className="bg-about-use-Bottom-content" />
      <BgAboutUseBottomContentCard />
    </ContainerCardAboutUseBottom>
  );
};
