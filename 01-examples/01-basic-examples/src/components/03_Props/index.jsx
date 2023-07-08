import FunctionalCard01 from './FunctionalCard01';
import './style.scss';

const Example3 = () => {
  return (
    <section data-name="Example3" className="d-flex">
      <FunctionalCard01
        img="http://fakeimg.pl/500x300/3498db/"
        name="milkmidi"
        price={100}
      />
      <FunctionalCard01
        price={200}
        img="http://fakeimg.pl/500x300/e74c3c/"
        name="奶綠茶"
      >
        <h1 className="bg-info">我是子元素</h1>
      </FunctionalCard01>

      <FunctionalCard01 img="http://fakeimg.pl/500x300/e74c3c/" name="紅寶石" />
    </section>
  );
};
export default Example3;
