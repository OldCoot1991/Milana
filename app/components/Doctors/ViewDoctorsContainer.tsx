import {
  Overlay,
  ViewDoctorsContainer,
  ViewDoctorsContainerRight,
  ViewDoctorsContainerLeft,
  ViewContainerText,
} from "@/app/ui/Doctors";
import TextViewDoc from "@/app/ui/TextViewDoc";
import TitleSelection from "@/app/ui/TitleName";
import TitleViewSelection from "@/app/ui/TitleViewDoctor";

interface IProps {
  name: string; // имя врача
  image: string; // класс в котором лежит изображение врача
  key: string; // уникальный ключ
  profile: string; // профиль
  internship: string; // стаж
  onClick: () => void;
}
export default function ViewDoctorsContainerComponents({ ...props }: IProps) {
  return (
    <Overlay>
      <ViewDoctorsContainer key={props.key} onClick={props.onClick}>
        <ViewDoctorsContainerLeft>
          <div className={props.image} />
          <ViewContainerText>
            <TitleSelection text={"Должность"} textColor={"#FFFFFF"} />
            <TextViewDoc text={props.profile} textColor={"#FFFFFF"} />
          </ViewContainerText>
          <ViewContainerText>
            <TitleSelection
              text={"Стаж работы по специальности"}
              textColor={"#FFFFFF"}
            />
            <TextViewDoc text={props.internship} textColor={"#FFFFFF"} />
          </ViewContainerText>
        </ViewDoctorsContainerLeft>

        <ViewDoctorsContainerRight>
          <div className="flex-row-beetween">
            <TitleViewSelection text={props.name} />
            <button className="buttton-close" onClick={props.onClick}>
              X
            </button>
          </div>
        </ViewDoctorsContainerRight>
      </ViewDoctorsContainer>
    </Overlay>
  );
}
