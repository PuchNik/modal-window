import styles from './app.module.css'
import { useState } from "react"

interface ListItem {
    id: number,
    value: string,
}

function App() {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [list, setList] = useState<ListItem[]>([])
    const [isValueValid, setIsValueValid] = useState(true)

    const formatTime = (timestamp: number) => {
        const date = new Date(timestamp);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    const onInputButtonClick = () => {
        const promptValue = prompt("Введите новое значение:")

        if (promptValue) {
            if (promptValue.length < 3) {
                setError('Введенное значение должно содержать минимум 3 символа!')
                setValue('')
                setIsValueValid(true)
            } else {
                setError('')
                setValue(promptValue)
                setIsValueValid(false)
            }
        }
    }

    const onAddButtonClick = () => {
        if (value) {
            const updatedList = [...list, { id: Date.now(), value }]
            setList(updatedList)

            setValue('')
            setError('')
            setIsValueValid(true)

            console.log(list)
        }
    }

    return (
        <>
            <div className="app">
                <h1 className={styles['page-heading']}>Ввод значения</h1>
                <p className={styles['no-margin-text']}>
                    Текущее значение <code>value</code>: "
                    <output className={styles['current-value']}>{value}</output>  {/* Вывод значения на экран */}
                    "
                </p>
                <div className={error ? styles['error-true'] : styles['error-false']}>{error}</div>
                <div className={styles['buttons-container']}>
                    <button className={styles['button']} onClick={onInputButtonClick}>Ввести новое</button>
                    <button className={styles['button']} disabled={isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
                </div>
                <div className={styles['list-container']}>
                    <h2 className={styles['list-heading']}>Список:</h2>
                    <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
                    <ul className={styles['list']}>
                        {list.map(({id, value}) => (
                            <li key={id} className={styles['list-item']}>
                                {formatTime(id)}: {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App;
