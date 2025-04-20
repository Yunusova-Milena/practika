import React, { useState } from 'react';
import { Progress, InputNumber, ColorPicker } from 'antd';

const GradientProgress = () => {
  const [percent, setPercent] = useState(60);
  const [gradientColors, setGradientColors] = useState([
    { color: '#9fb97f', position: '0%' },
    { color: '#4e8950', position: '50%' },
    { color: '#29482a', position: '100%' }
  ]);

  const handleColorChange = (index, color) => {
    const newColors = [...gradientColors];
    newColors[index].color = color.toHexString();
    setGradientColors(newColors);
  };

  const getGradientColor = () => {
    const result = {};
    gradientColors.forEach(({ color, position }) => {
      result[position] = color;
    });
    return result;
  };

  return (
    <div style={{
      maxWidth: '400px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #f0f0f0',
      borderRadius: '8px'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>Градиентный прогресс</h3>

      {/* Ввод процентов и прогрессбар */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
        <InputNumber
          min={0}
          max={100}
          value={percent}
          onChange={(value) => {
            let newValue = typeof value === 'number' && !isNaN(value) ? value : 0;
            if (newValue > 100) newValue = 100;
            if (newValue < 0) newValue = 0;
            setPercent(newValue);
          }}
          style={{ width: '80px' }}
          formatter={(value) => `${value}%`}
          parser={(value) => {
            const parsed = parseInt((value || '').replace('%', ''), 10);
            return Math.min(Math.max(parsed, 0), 100);
          }}
        />

        <Progress
          percent={percent}
          strokeColor={getGradientColor()}
          size={['100%', 15]}
          showInfo={false}
          style={{ flex: 1 }}
        />
      </div>

      {/* Палитра для цветов градиента */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '16px'
      }}>
        {gradientColors.map((colorObj, index) => (
          <div key={index}>
            <div style={{ marginBottom: '8px', color: '#666' }}>
              Цвет {index + 1} ({colorObj.position})
            </div>
            <ColorPicker
              value={colorObj.color}
              onChange={(color) => handleColorChange(index, color)}
              format="hex"
              size="middle"
              disabledAlpha
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientProgress;


  /* const getGradientStyle = () => {
     const gradientString = gradientColors
       .map(item => `${item.color} ${item.position}`)
       .join(',');
     return {
       backgroundImage: `linear-gradient(90deg, ${gradientString})`
     };
   };
 */