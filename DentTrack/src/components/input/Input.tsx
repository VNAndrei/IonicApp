import { IonInput, IonLabel } from "@ionic/react";
import React from "react";
import styles from "./input.module.scss";

interface InputProps {
    name: string;
    id?: string;
    placeholder: string;
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    type?: "text" | "password";
    requiredField?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    height?: string;
    width?: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    return (
        <>
            <IonLabel className={styles.label} position="stacked">
                {props.placeholder}
            </IonLabel>
            <IonInput
                style={{ width: props.width, height: props.height }}
                className={styles.input}
                name={props.name}
                id={props.id}
                onIonChange={props.onChange}
                onIonBlur={props.onBlur}
                required={props.requiredField}
                disabled={props.disabled}
                defaultValue={props.defaultValue}
                type={props.type}
                placeholder={props.placeholder}
                clearOnEdit={false}
            />
        </>
    );
};

export default Input;
