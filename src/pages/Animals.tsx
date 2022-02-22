import { Icon, Info, Select } from "../components/Animals/styles";

const Animals = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Animals</h1>
      </header>
      <Info>
        <Select>
          <option>Horse</option>
        </Select>
        <div>Name: Horse</div>
        <div>
          Species: <i>Equus ferus caballus</i>
        </div>
        <div>Diet:</div>
        <div>Life span: 30 years</div>
        <div>
          <Icon>🐴</Icon>
        </div>
      </Info>
    </div>
  );
};

export default Animals;
