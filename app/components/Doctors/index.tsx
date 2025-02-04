import { CardDoctorsContainer, CardDoctorsImageDiv, CardDoctorsName, CardDoctorsProfile } from "@/app/ui/Doctors";


interface ICardDoctor{
    name: string;
    profile: string;
    classImage: string;
    key: string;
    onClick?: () => void;
}

function CardDoctor({...props}:ICardDoctor){
    return (
            <CardDoctorsContainer key={props.key} onClick={props.onClick}>
                <div className={props.classImage}/>
                <div className="container-doc">
                <CardDoctorsName className="Manrope-Bold">{props.name}</CardDoctorsName>
                <CardDoctorsProfile className="Manrope-Regular">{props.profile}</CardDoctorsProfile>
                </div>
                {/* <button className="Manrope-Regular" onClick={}>Подробнее</button> */}
            </CardDoctorsContainer>
    )
}

export default CardDoctor;