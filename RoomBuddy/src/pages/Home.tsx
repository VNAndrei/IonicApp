import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton} from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import './Home.css';

const Home: React.FC = () => {
const history = useHistory()
 
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
        <IonButton onClick={()=>history.push("/homes")} color="primary">See Homes</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
