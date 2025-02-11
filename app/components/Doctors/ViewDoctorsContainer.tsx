import {
  ViewDoctorsContainer,
  ViewDoctorsContainerRight,
  ViewDoctorsContainerLeft,
  ViewContainerText,
} from "@/app/ui/Doctors";
import Close from "@/app/ui/Doctors/Close";
import TextViewDoc from "@/app/ui/TextViewDoc";
import TitleSelection from "@/app/ui/TitleName";
import TitleViewSelection from "@/app/ui/TitleViewDoctor";

interface IProps {
  name: string; // имя врача
  image: string; // класс в котором лежит изображение врача
  key: string; // уникальный ключ
  profile: string; // профиль
  internship: string; // стаж
  classImage: string;
  onClick?: () => void;
  medicalAssociations: string[]; // Измените на string[], чтобы включать все элементы
  treatmentProfile: string[];
  education: {
    year: number; // Меняем на number, если это более удобно
    institution: string;
    degree: string;
  }[];
  workExperience: { year: string; position: string; organization: string }[];
}

export default function ViewDoctorsContainerComponents({
  name,
  image,
  profile,
  internship,
  classImage,
  onClick,
  medicalAssociations,
  treatmentProfile,
  education,
  workExperience,
}: IProps) {
  return (
    <ViewDoctorsContainer key={name} onClick={onClick}>
      <ViewDoctorsContainerLeft>
        <div className={image} />
        <ViewContainerText>
          <TitleSelection text={"Должность"} textColor={"#FFFFFF"} />
          <TextViewDoc text={profile} textColor={"#FFFFFF"} />
        </ViewContainerText>
        <ViewContainerText>
          <TitleSelection
            text={"Стаж работы по специальности"}
            textColor={"#FFFFFF"}
          />
          <TextViewDoc text={internship} textColor={"#FFFFFF"} />
        </ViewContainerText>
      </ViewDoctorsContainerLeft>

      <ViewDoctorsContainerRight>
        <div className="flex-row-beetween">
          <TitleViewSelection text={name} />
          <Close onClick={onClick} />
        </div>
        {workExperience.map((exp, index) => (
          <p key={index} >{exp.year}</p>
        ))}
      </ViewDoctorsContainerRight>
    </ViewDoctorsContainer>
  );
}
