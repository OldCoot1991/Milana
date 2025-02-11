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
                
                {/* Добавьте информацию о медицинских ассоциациях */}
                <div>
                    <strong>Медицинские ассоциации:</strong>
                    <ul>
                        {props.medicalAssociations.map((association, index) => (
                            <li key={index}>{association}</li>
                        ))}
                    </ul>
                </div>

                {/* Добавьте информацию о профиле лечения */}
                <div>
                    <strong>Профиль лечения:</strong>
                    <ul>
                        {props.treatmentProfile.map((treatment, index) => (
                            <li key={index}>{treatment}</li>
                        ))}
                    </ul>
                </div>

                {/* Добавьте образование */}
                <div>
                    <strong>Образование:</strong>
                    <ul>
                        {props.education.map((edu, index) => (
                            <li key={index}>
                                {edu.year} - {edu.institution}, {edu.degree}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Добавьте опыт работы */}
                <div>
                    <strong>Опыт работы:</strong>
                    <ul>
                        {props.workExperience.map((experience, index) => (
                            <li key={index}>
                                {experience.year} - {experience.position}, {experience.organization}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CardDoctorsContainer>
    );
}