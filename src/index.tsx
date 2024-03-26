import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './Demo'; 
import Interface from './component2'; // Import Interface from component2.tsx

import Demo2 from './Demo2';

// import StepsSlider from './component2';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        
        <Demo />
        <Demo /> 
         <Demo2 />  
        <Demo2 /> 

    //    <StepsSlider />
        
      <Interface title="Example" buttonText="Click me" imageUrl="example.jpg" onClick={() => console.log("Clicked")} />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
); 
