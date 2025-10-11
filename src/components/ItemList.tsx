import { useMemo, memo } from "react";
import styles from "../app.module.css";

export interface ListItem {
    id: number;
    value: string;
}

interface ItemListProps {
    items: ListItem[];
}

const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
};

export const ItemList = memo(({ items }: ItemListProps) => {
    const formattedItems = useMemo(() => {
        return items.map(({ id, value }) => ({
            id,
            value,
            formattedTime: formatTime(id),
        }));
    }, [items]);

    return (
        <div className={styles["list-container"]}>
            <h2 className={styles["list-heading"]}>Список:</h2>
            {items.length === 0 ? (
                <p className={styles["no-margin-text"]}>
                    Нет добавленных элементов
                </p>
            ) : (
                <ul className={styles["list"]}>
                    {formattedItems.map(({ id, value, formattedTime }) => (
                        <li key={id} className={styles["list-item"]}>
                            {formattedTime}: {value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});
