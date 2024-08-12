import { HeaderLayout, Element1, Element2, Element3 } from "@/app/ui/header";
import HeaderButton from "@/app/components/Layout/Menu";
import HeaderSearch from "@/app/ui/header/HeaderSearch";
import HeaderTel from "@/app/ui/header/HeaderTel";
import HeaderLinkTelMobail from "@/app/ui/header/HeaderTelMobail";
import HeaderLogo from "@/app/ui/header/HeaderLogo";

const Header = () => {
  return (
    <HeaderLayout>
      <Element1>
        <HeaderLogo />
      </Element1>
      <Element2>
        <HeaderTel />
        <HeaderButton />
      </Element2>
      <Element3>
        <HeaderLinkTelMobail />
        <HeaderSearch/>
      </Element3>
    </HeaderLayout>
  );
};

export default Header;
