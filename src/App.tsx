import { useState, useCallback } from "react";
import styles from "./app.module.css";
import { InputForm } from "./components/InputForm";
import { ItemList, type ListItem } from "./components/ItemList";

function App() {
    const [list, setList] = useState<ListItem[]>([]);

    const handleAddItem = useCallback((value: string) => {
        const newItem: ListItem = {
            id: Date.now(),
            value: value,
        };
        setList((prevList) => [...prevList, newItem]);
    }, []);

    return (
        <div className="app">
            <h1 className={styles["page-heading"]}>Ввод значения</h1>
            <InputForm onAddItem={handleAddItem} />
            <ItemList items={list} />
        </div>
    );
}

export default App;
