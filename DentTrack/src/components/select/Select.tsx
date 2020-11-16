import { IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";
import styles from "./select.module.scss";

interface SelectProps {
    onChange?: any;
    value?: string;
    placeholder: string;
    options: string[];
    height?: string;
    width?: string;
}

const Select: React.FC<SelectProps> = (props: SelectProps) => {
    return (
        <>
            <IonLabel className={styles.label} position="stacked">
                {props.placeholder}
            </IonLabel>
            <IonSelect
                style={{ width: props.width, height: props.height }}
                className={styles.select}
                value={props.value}
                placeholder={props.placeholder}
                onIonChange={props.onChange}
            >
                <IonSelectOption value="" disabled>
                    {props.placeholder}
                </IonSelectOption>
                {props.options.map((v) => (
                    <IonSelectOption key={v} value={v}>
                        {v}
                    </IonSelectOption>
                ))}
            </IonSelect>
        </>
    );
};

export default Select;
