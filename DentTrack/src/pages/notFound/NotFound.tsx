import { IonCol, IonContent, IonGrid, IonRow, IonText } from "@ionic/react";
import React from "react";
import styles from "./notFound.module.scss";
interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <IonContent>
            <IonGrid className={styles.root}>
                <IonRow class=" ion-justify-content-center ion-align-items-end">
                    <IonText className={styles.statusCode}>404</IonText>
                </IonRow>
                <IonRow class=" ion-justify-content-center ion-align-items-center">
                    <IonText className={styles.title}>Ooops!!</IonText>
                </IonRow>
                <IonRow class="ion-justify-content-center ion-align-items-start">
                    <IonText className={styles.description}>
                        THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.
                    </IonText>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default NotFound;
