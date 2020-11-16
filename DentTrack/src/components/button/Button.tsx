import { IonButton } from "@ionic/react";
import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    value: string;
    onClick?: (event: any) => void;
    type?: "submit";
    height?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <IonButton
            style={{ width: props.width, height: props.height }}
            onClick={props.onClick}
            type={props.type}
            className={styles.button}
        >
            {props.value}
        </IonButton>
    );
};

export default Button;
