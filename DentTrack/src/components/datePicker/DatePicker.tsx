import { IonDatetime, IonLabel } from "@ionic/react";
import React from "react";
import styles from "./datePicker.module.scss";

interface DatePickerProps {
    id?: string;
    value?: Date;
    label: string;
    onChange?: (event: any) => void;
    height?: string;
    width?: string;
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
    const currentDate = new Date();
    return (
        <>
            <IonLabel className={styles.label} position="stacked">
                {props.label}
            </IonLabel>
            <IonDatetime
                style={{ width: props.width, height: props.height }}
                className={styles.datePicker}
                displayFormat="DD/MM/YYYY"
                min={currentDate.toJSON().slice(0, 10)}
                max={new Date(
                    currentDate.getFullYear() + 1,
                    currentDate.getMonth(),
                    currentDate.getDate()
                )
                    .toJSON()
                    .slice(0, 10)}
                value={
                    props.value === undefined || props.value === null
                        ? new Date().toJSON().slice(0, 10)
                        : props.value.toJSON().slice(0, 10)
                }
                onIonChange={props.onChange}
            ></IonDatetime>
        </>
    );
};

export default DatePicker;
