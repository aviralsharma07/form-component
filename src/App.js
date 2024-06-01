import "./App.css";
import FormComponent from "./components/form/Form";
import FormConfigJSON from "./assets/json/form.json";

function App() {
  return (
    <div className="App">
      <div className="info">DYNAMIC FORM</div>
      <FormComponent formConfig={FormConfigJSON} />
    </div>
  );
}

export default App;
