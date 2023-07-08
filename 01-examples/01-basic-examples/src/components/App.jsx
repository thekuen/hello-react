import Example02 from './02_Component';
import Example03 from './03_Props';
import Example04 from './04_useState';
import Example05 from './05_ConditionalRendering';
import Example06 from './06_styleClassBind';
import Example07 from './07_ListRendering';
import Example08 from './08_useEffect';
import Example10 from './10_fetch_api';
import Example12 from './12_Form';
import Example17 from './17_ComponentCommunication';

const App = () => {
  const ExampleComponent = Example12;
  return (
    <div className="container">
      <ExampleComponent />
    </div>
  );
};

export default App;
