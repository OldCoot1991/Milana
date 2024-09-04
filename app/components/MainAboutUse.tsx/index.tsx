import { MainBottomImageAboutUse, MainTopAboutUseContainer, MainTopImageAboutUse, MainTopImageAboutUseContainer } from "@/app/ui/mainAboutUse";

const MainTopAboutUse = () => {
    return (
      <MainTopAboutUseContainer>
        <MainTopImageAboutUseContainer>
          <MainTopImageAboutUse className="MainTopAboutUse_img_1" />
          <MainTopImageAboutUse className="MainTopAboutUse_img_2" />
        </MainTopImageAboutUseContainer>
        <MainBottomImageAboutUse className="MainBottomAboutUse_img_3" />
      </MainTopAboutUseContainer>
    );
  };

  export default MainTopAboutUse;