import { IonCard, IonCardContent, IonCardTitle } from "@ionic/react";
import React from "react";
import { Technician } from "../../domain/models/Technician";

interface TechnicianCardProps {
    technician: Technician;
    onClick: (id: number) => void;
}

const TechnicianCard: React.FC<TechnicianCardProps> = ({
    technician,
    onClick,
}) => {
    return (
        <IonCard onClick={() => onClick(technician.id)}>
            <IonCardContent>
                <IonCardTitle>{technician.displayName}</IonCardTitle>
                <IonCardTitle>{technician.ongoingTreatments}</IonCardTitle>
            </IonCardContent>
        </IonCard>
    );
};

export default TechnicianCard;
