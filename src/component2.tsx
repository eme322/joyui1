import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import Button from @mui/joy/Box';

interface InterfaceProps {
  title: string;
  buttonText: string;
  imageUrl: string;
  onClick: () => void;
}

const Interface: React.FC<InterfaceProps> = ({
  title,
  buttonText,
  imageUrl,
  onClick,
}) => {
  return (
    <Box sx={{ width: 300 }}>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
      <Button onClick={onClick}>{buttonText}</Button>
    </Box>
  );
};

export default function App() {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div>
      <Interface
        title="Interface 1"
        buttonText="Button 1"
        imageUrl="https://via.placeholder.com/300"
        onClick={handleButtonClick}
      />
      <Interface
        title="Interface 2"
        buttonText="Button 2"
        imageUrl="https://via.placeholder.com/300"
        onClick={handleButtonClick}
      />
      <Interface
        title="Interface 3"
        buttonText="Button 3"
        imageUrl="https://via.placeholder.com/300"
        onClick={handleButtonClick}
      />
      {/* Add more Interface components as needed */}
    </div>
  );
}







/*
function valueText(value: number) {
  return `${value}°C`;
}

export default function StepsSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Button> In component2 </Button>
      {*/
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={valueText}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"

        */}
        
      />
    </Box>
  );
}
*/
