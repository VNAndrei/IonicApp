import { useStateMachine } from "little-state-machine";
import * as React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { Role } from "../../domain/enums/Role";
import { AppState } from "../states/AppState";
import { freeRoutes } from "./routes";

interface ProtectedRouteProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
    requiredRole?: Role | boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    Component,
    path,
    exact = false,
    requiredRole = false,
}: ProtectedRouteProps) => {
    const {
        state: { account },
    } = useStateMachine<AppState>();
    const isNotAuthed = account === undefined;

    const isAuthorized = isNotAuthed
        ? false
        : requiredRole === false
        ? true
        : account.role === requiredRole ||
          account.role === Role.Admin ||
          (requiredRole === Role.Medic && account.role === Role.MedicAdmin);

    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) =>
                isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: isNotAuthed
                                ? freeRoutes.login
                                : freeRoutes.forbidden,
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
