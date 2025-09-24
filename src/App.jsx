import './App.css';

function App() {
  return (
    <>
      <div className="app">
          <h1 className="page-heading">Ввод значения</h1>
          <p className="no-margin-text">
            Текущее значение <code>value</code>: "<output className="current-value"></output>"
          </p>
          <div className="error">Введенное значение должно содержать минимум 3 символа</div>
          <div className="buttons-container">
            <button className="button">Ввести новое</button>
            <button className="button" disabled>
              Добавить в список
            </button>
          </div>
          <div className="list-container">
            <h2 className="list-heading">Список:</h2>
            <p className="no-margin-text">Нет добавленных элементов</p>
            <ul className="list">
              <li className="list-item">Первый элемент</li>
            </ul>
          </div>
        </div>
    </>
  );
}

export default App;
