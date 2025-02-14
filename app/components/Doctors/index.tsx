import { CardDoctorsContainer, CardDoctorsImageDiv, CardDoctorsName, CardDoctorsProfile } from "@/app/ui/Doctors";


interface ICardDoctor {
    name: string;
    profile: string;
    classImage: string;
    key: string;
    onClick?: () => void;
    medicalAssociations: string[]; // Измените на string[], чтобы включать все элементы
    treatmentProfile: string[];
    education: {
        year: number; // Меняем на number, если это более удобно
        institution: string;
        degree: string;
      }[];
    workExperience: { year: string; position: string; organization: string; }[];
}

 export function CardDoctor({...props}: ICardDoctor) {
    return (
        <CardDoctorsContainer key={props.key} onClick={props.onClick}>
            <div className={props.classImage} />
            <div className="container-doc">
                <CardDoctorsName className="Manrope-Bold">{props.name}</CardDoctorsName>
                <CardDoctorsProfile className="Manrope-Regular">{props.profile}</CardDoctorsProfile>
            </div>
        </CardDoctorsContainer>
    );
}