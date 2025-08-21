import './App.css';
import Search from './Component/search';
import FunctionalComponent from './Component/functionalComponent';
import ThemeProvider from './Component/ThemeContext';
import MultistepForm from './Component/multistepForm/multistepForm';

function App() {
  
  return (
    <MultistepForm/>
    // <ThemeProvider>
    //   <FunctionalComponent />
    //   <Search />
    // </ThemeProvider>
  );
}

export default App;
