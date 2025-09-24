import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const isValueValid = value.trim().length >= 3;

  function onInputButtonClick() {
    const userInput = prompt('Введите что-нибудь:');

    if (userInput === null || userInput.trim().length < 3) {
      setError('Введенное значение должно содержать минимум 3 символа');
    } else {
      setValue(userInput.trim());
      setError('');
    }
  }

  function onAddButtonClick() {
    if (isValueValid) {
      const createdAt = new Date().toLocaleString('ru-RU');
      setList((prev) => [...prev, { id: Date.now(), value, createdAt }]);
      setValue('');
      setError('');
    }
  }

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles['page-heading']}>Ввод значения</h1>
        <p className={styles['no-margin-text']}>
          Текущее значение <code>value</code>: "
          <output className={styles['current-value']}>{value}</output>"
        </p>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles['buttons-container']}>
          <button className={styles.button} onClick={onInputButtonClick}>
            Ввести новое
          </button>
          <button className={styles.button} onClick={onAddButtonClick} disabled={!isValueValid}>
            Добавить в список
          </button>
        </div>
        <div className={styles['list-container']}>
          <h2 className={styles['list-heading']}>Список:</h2>
          {list.length === 0 ? (
            <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
          ) : (
            <ul className={styles['list']}>
              {list.map(({ id, value, createdAt }) => (
                <li key={id} className={styles['list-item']}>
                  {createdAt}: {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
