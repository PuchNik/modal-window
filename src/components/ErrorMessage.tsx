import { memo } from "react";
import styles from "../app.module.css";

interface ErrorMessageProps {
    error: string;
}

export const ErrorMessage = memo(({ error }: ErrorMessageProps) => {
    return (
        <div className={error ? styles["error-true"] : styles["error-false"]}>
            {error}
        </div>
    );
});
