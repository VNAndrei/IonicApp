import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface HomesProps {
    
}

const Homes: React.FC<HomesProps> = () => {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
              
            </IonToolbar>
          </IonHeader>
          <div>dksjfhnkjsdhfjk</div>
        </IonContent>
      </IonPage>
    );
};

export default Homes;