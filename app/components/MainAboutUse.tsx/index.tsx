import {
  MainBottomImageAboutUse,
  MainTopAboutUseContainer,
  MainAboutUseContainerReverse,
  MainTopImageAboutUse,
  MainTopImageAboutUseContainer,
  MainCenterImageAboutUseContainer,
  ImageLogo,
  MainAboutUseContainerText,
  MainAboutUseTitle,
  TextP,
  LAptopAndMobailMainAboutUseContainerText,
} from "@/app/ui/mainAboutUse";

const MainTopAboutUse = () => {
  return (
    <MainTopAboutUseContainer>
      <MainAboutUseContainerReverse>
        <MainTopImageAboutUseContainer>
          <MainTopImageAboutUse className="MainTopAboutUse_img_1" />
          <MainTopImageAboutUse className="MainTopAboutUse_img_2" />
        </MainTopImageAboutUseContainer>
        <MainCenterImageAboutUseContainer>
          <ImageLogo className="MainAboutUse_Logo" /> \
          <MainAboutUseContainerText>
            <MainAboutUseTitle className="Manrope-Bold">
              Клиника флебологии
            </MainAboutUseTitle>
            <TextP textColor="#033234" className="Manrope-Regular">
              В Инновационном сосудистом центре Док.Варикоз ведут прием
              высококвадифицированные специалисты в области сосудистой хирургии,
              флебологии.
            </TextP>
            <TextP textColor="#033234" className="Manrope-Regular">
              Осуществляется консультативный прием врачей по специльностям
              "Психиатрия", "Аллергология-иммунология", "Неврология".
            </TextP>
          </MainAboutUseContainerText>
        </MainCenterImageAboutUseContainer>
      </MainAboutUseContainerReverse>
      <LAptopAndMobailMainAboutUseContainerText>
      <MainAboutUseTitle className="Manrope-Bold">
              Клиника флебологии
            </MainAboutUseTitle>
            <TextP textColor="#033234" className="Manrope-Regular">
              В Инновационном сосудистом центре Док.Варикоз ведут прием
              высококвадифицированные специалисты в области сосудистой хирургии,
              флебологии.
            </TextP>
            <TextP textColor="#033234" className="Manrope-Regular">
              Осуществляется консультативный прием врачей по специльностям
              "Психиатрия", "Аллергология-иммунология", "Неврология".
            </TextP>
      </LAptopAndMobailMainAboutUseContainerText>
      <MainBottomImageAboutUse className="MainBottomAboutUse_img_3" />
    </MainTopAboutUseContainer>
  );
};

export default MainTopAboutUse;
