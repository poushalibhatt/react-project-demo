import './App.css';
import Search from './Component/search';
import FunctionalComponent from './Component/functionalComponent';
import ThemeProvider from './Component/ThemeContext';

function App() {

  
  return (
    <ThemeProvider>
      <FunctionalComponent />
      <Search />
    </ThemeProvider>
  );
}

export default App;
