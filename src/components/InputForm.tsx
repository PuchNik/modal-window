import { useState, useCallback, memo } from "react";
import styles from "../app.module.css";
import { ErrorMessage } from "./ErrorMessage";

interface InputFormProps {
    onAddItem: (value: string) => void;
}

export const InputForm = memo(({ onAddItem }: InputFormProps) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [isValueValid, setIsValueValid] = useState(false);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            setValue(inputValue);

            if (inputValue.length >= 3) {
                setError("");
                setIsValueValid(true);
            } else {
                setError(
                    "Введенное значение должно содержать минимум 3 символа!"
                );
                setIsValueValid(false);
            }
        },
        []
    );

    const handleAddClick = useCallback(() => {
        if (value.trim() && isValueValid) {
            onAddItem(value.trim());
            setValue("");
            setError("");
            setIsValueValid(false);
        }
    }, [value, isValueValid, onAddItem]);

    const handleKeyPress = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" && isValueValid) {
                handleAddClick();
            }
        },
        [isValueValid, handleAddClick]
    );

    return (
        <div>
            <p className={styles["no-margin-text"]}>
                Текущее значение <code>value</code>: "
                <output className={styles["current-value"]}>{value}</output>"
            </p>

            <ErrorMessage error={error} />

            <div className={styles["input-container"]}>
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите значение (минимум 3 символа)"
                    className={styles["input-field"]}
                />
            </div>

            <div className={styles["buttons-container"]}>
                <button
                    className={styles["button"]}
                    disabled={!isValueValid}
                    onClick={handleAddClick}
                >
                    Добавить в список
                </button>
            </div>
        </div>
    );
});
