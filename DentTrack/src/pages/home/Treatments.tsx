import {
    IonContent,
    IonHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useStateMachine } from "little-state-machine";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { treatmentApi } from "../../api/TreatmentApi";
import TreatmentCard from "../../components/treatmentCard/TreatmentCard";
import { Pagination } from "../../domain/models/Pagination";
import { Treatment } from "../../domain/models/Treatment";

interface TreatmentsProps {}

const Treatments: React.FC<TreatmentsProps> = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [infiniteScroll, setInfiniteScroll] = useState<boolean>(false);
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        pageSize: 10,
    });
    const location = useLocation<{ id: number }>();

    const [userId] = useState(location.state.id);
    const fetchData = (
        page: number = pagination.page,
        pageSize: number = pagination.pageSize
    ) => {
        treatmentApi
            .getTreatments(userId!, {
                page: page,
                pageSize: pageSize,
            })
            .then((data) => {
                const fetched = Object.values(data);
                setTreatments([...treatments, ...fetched]);
                setInfiniteScroll(fetched.length !== pagination.pageSize);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const searchNext = async (e: CustomEvent<void>) => {
        const newPag = { ...pagination, page: pagination.page + 1 };
        setPagination(newPag);
        fetchData(newPag.page, newPag.pageSize);

        (e.target as HTMLIonInfiniteScrollElement).complete();
    };

    const onClick = (id: number) => {
        console.log(id);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tratamente</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {treatments.map((treatment: Treatment, i: number) => (
                    <TreatmentCard
                        key={`${i}`}
                        treatment={treatment}
                        onClick={onClick}
                    />
                ))}
                <IonInfiniteScroll
                    threshold="10px"
                    disabled={infiniteScroll}
                    onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}
                >
                    <IonInfiniteScrollContent loadingText="Loading..."></IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
};

export default Treatments;
