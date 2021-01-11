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
import { useHistory } from "react-router";
import { accountApi } from "../../api/AccountApi";
import { treatmentApi } from "../../api/TreatmentApi";
import TechnicianCard from "../../components/technicianCard/TechnicianCard";
import TreatmentCard from "../../components/treatmentCard/TreatmentCard";
import { Pagination } from "../../domain/models/Pagination";
import { Technician } from "../../domain/models/Technician";
import { Treatment } from "../../domain/models/Treatment";
import { protectedRoutes } from "../../infrastructure/routes/routes";

interface TechniciansProps {}

const Home: React.FC<TechniciansProps> = () => {
    const {
        state: { account },
    } = useStateMachine();
    const [technicians, setTechnicians] = useState<Technician[]>([]);
    const [infiniteScroll, setInfiniteScroll] = useState<boolean>(false);
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        pageSize: 10,
    });
    const history = useHistory();

    const fetchData = () => {
        accountApi
            .getTechnicians()
            .then((data) => {
                const fetched = Object.values(data);
                setTechnicians([...technicians, ...fetched]);
                setInfiniteScroll(fetched.length !== pagination.pageSize);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const onClick = (id: number) => {
        history.push({
            pathname: protectedRoutes.treatments,
            state: { id: id },
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tehnicieni</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {technicians.map((t: Technician, i: number) => (
                    <TechnicianCard
                        key={`${i}`}
                        technician={t}
                        onClick={onClick}
                    />
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Home;
