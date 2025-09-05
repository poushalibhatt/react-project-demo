import './App.css';
import {useState} from 'react'
import Search from './Component/search';
import FunctionalComponent from './Component/functionalComponent';
// import ThemeProvider from './Component/ThemeContext';
import MultistepForm from './Component/multistepForm/multistepForm';
import FormComponent from './table/FormComponent';
import TableComponent from './table/TableComponent';
import CountDownTimer from './Timer';
import Count from './Count';
function App() {
  const [phoneData, setPhoneData] = useState({
    firstname: "Code",
    lastname: "Byte",
    phone: "5464646445788"
  })
  const [phoneList, setPhoneList] = useState([])
  return (
    <section>
      <FormComponent
        phoneData={phoneData} 
        phoneList={phoneList}
        setPhoneData={setPhoneData}
        setPhoneList={setPhoneList}
      />
      <TableComponent phoneList={phoneList}/>
      <CountDownTimer />
      <Count />
    </section>
     // <MultistepForm/>
    // <ThemeProvider>
    //   <FunctionalComponent />
    //   <Search />
    // </ThemeProvider>
  );
}

export default App;
