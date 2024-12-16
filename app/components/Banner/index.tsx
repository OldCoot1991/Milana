import BannerUi from "@/app/ui/banner/Banner";
import TitleBanner from "@/app/ui/banner/BannerTitle";
import Legs from "@/app/ui/banner/Legs";

export default function Banner( ) {
    return (
        <BannerUi> 
            <Legs />
            <TitleBanner text={"!Лазерное лечение Варикоза «Всё включено» с выгодой от 10 000 ₽"}/>
        </BannerUi>
    )
}
