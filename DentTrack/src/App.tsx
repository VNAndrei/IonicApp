import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import {
    createStore,
    setStorageType,
    StateMachineProvider,
} from "little-state-machine";
import { AppState } from "./infrastructure/states/AppState";
import NotFound from "./pages/notFound/NotFound";
import { freeRoutes, protectedRoutes } from "./infrastructure/routes/routes";
import Forbidden from "./pages/forbidden/Forbidden";
import Login from "./pages/login/Login";
import Treatments from "./pages/home/Treatments";
import ProtectedRoute from "./infrastructure/routes/ProtectedRoute";
import Technicians from "./pages/technicians/Technicians";

const initialState: AppState = {
    account: {},
};
setStorageType(localStorage);
const localData = localStorage.getItem("__STATE_MACHINE__");
const state = localData === null ? initialState : JSON.parse(localData);
createStore(state);
const App: React.FC = () => (
    <StateMachineProvider>
        <IonApp style={{ backgroundColor: "#FFFFFF" }}>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path={freeRoutes.forbidden} component={Forbidden} />
                    <ProtectedRoute
                        Component={Treatments}
                        path={protectedRoutes.treatments}
                    />
                    <ProtectedRoute
                        Component={Technicians}
                        path={protectedRoutes.technicians}
                    />
                    <Route path={freeRoutes.login} component={Login} />
                    <Route component={NotFound} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    </StateMachineProvider>
);

export default App;
