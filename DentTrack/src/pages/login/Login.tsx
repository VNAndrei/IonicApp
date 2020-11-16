import {
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonRow,
    IonText,
} from "@ionic/react";
import { useStateMachine } from "little-state-machine";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { updateAccount } from "../../actions/account";
import { AccountApi } from "../../api/AccountApi";
import { images } from "../../common/appConstants/images";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { apiConfig } from "../../config/api.config";
import { protectedRoutes } from "../../infrastructure/routes/routes";
import { isError } from "../../domain/models/Error";

import styles from "./login.module.scss";
import { User } from "../../domain/models/User";
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const history = useHistory();
    const [error, setError] = useState(false);
    const {
        action,
        state: { account },
    } = useStateMachine(updateAccount);
    const isAuthed = !!account.id;

    if (isAuthed) {
        history.push(protectedRoutes.home);
    }

    const handleInput = (e: any) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };
    const loginUser = async () => {
        const service = new AccountApi(apiConfig);

        const result = service.login(credentials);
        return result;
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let loggedUser = await loginUser(); //apel
        if (isError(loggedUser)) {
            setError(true);
            return;
        }
        loggedUser = loggedUser as User;
        action({
            token: loggedUser.token,
            role: loggedUser.role,
            id: loggedUser.id,
            displayName: loggedUser.displayName,
        });
        history.push(protectedRoutes.home);
    };
    return (
        <IonContent>
            <IonGrid className={styles.root}>
                <IonRow class="ion-justify-content-center">
                    <IonCol sizeMd="6" sizeLg="3" sizeXs="10">
                        <IonImg
                            className={styles.logo}
                            src={images.logo}
                            alt="logo"
                        ></IonImg>
                    </IonCol>
                </IonRow>
                <IonRow class="ion-justify-content-center">
                    <IonCol
                        sizeMd="6"
                        sizeLg="3"
                        sizeXs="10"
                        className={styles.typography}
                    >
                        <IonText>
                            Pentru a vă autentifica folosiți credențialele
                            primite
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow class="ion-justify-content-center">
                    <IonCol sizeMd="6" sizeLg="3" sizeXs="11">
                        <form onSubmit={handleSubmit}>
                            <fieldset className={styles.fieldset}>
                                {error ? (
                                    <IonRow class="ion-justify-content-center">
                                        <IonCol className={styles.errorMessage}>
                                            <IonText>
                                                Nume de utilizator sau parola
                                                incorecte
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                ) : null}
                                <IonRow
                                    className={styles.formControl}
                                    class="ion-justify-content-center"
                                >
                                    <Input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Nume utilizator"
                                        requiredField
                                        onBlur={handleInput}
                                    />
                                </IonRow>
                                <IonRow
                                    className={styles.formControl}
                                    class="ion-justify-content-center"
                                >
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Parola"
                                        requiredField
                                        onBlur={handleInput}
                                    />
                                </IonRow>
                            </fieldset>
                            <IonRow class="ion-justify-content-center">
                                <Button value="AUTENTIFICARE" type="submit" />
                            </IonRow>
                        </form>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Login;
