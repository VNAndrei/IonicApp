import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonGrid,
} from "@ionic/react";
import React from "react";
import { Treatment } from "../../domain/models/Treatment";
import styles from "./treatmentCard.module.scss";
interface TreatmentCardProps {
    treatment: Treatment;
    onClick: (id: number) => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
    treatment,
    onClick,
}) => {
    return (
        <IonCard onClick={() => onClick(treatment.id)}>
            <IonCardContent>
                <IonCardTitle>{treatment.baseTreatment.name}</IonCardTitle>
                <IonCardTitle>{treatment.description}</IonCardTitle>
            </IonCardContent>
        </IonCard>
    );
};

export default TreatmentCard;
