import React from 'react';
import './App.css';
import GradientProgress from './pr'; // импортируем компонент из pr.js
import 'antd/dist/reset.css'; // сброс стилей antd (если используете antd@5+)

function App() {
  return (
    <div className="App" style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Градиентный прогресс-бар</h1>
        <GradientProgress />
      </header>
    </div>
  );
}

export default App;
