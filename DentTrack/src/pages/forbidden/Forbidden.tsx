import { IonContent, IonGrid, IonRow, IonText } from "@ionic/react";
import React from "react";
import styles from "./forbidden.module.scss";

interface ForbiddenProps {}

const Forbidden: React.FC<ForbiddenProps> = () => {
    return (
        <IonContent>
            <IonGrid className={styles.root}>
                <IonRow class=" ion-justify-content-center">
                    <IonText className={styles.statusCode}>403</IonText>
                </IonRow>
                <IonRow class=" ion-justify-content-center">
                    <IonText className={styles.title}>Forbidden</IonText>
                </IonRow>
                <IonRow class="ion-justify-content-center">
                    <IonText className={styles.description}>
                        YOU ARE NOT ALLOWED TO ACCESS THIS PAGE
                    </IonText>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Forbidden;
