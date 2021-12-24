import { create } from "react-test-renderer";
import App from './App';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


// configure the adapter
Enzyme.configure( { adapter: new EnzymeAdapter() });
test( 'should render without errors', () => {
  let item = create(<App />);
  console.log(item.toJSON());
  expect(item.toJSON()).toMatchSnapshot();
} );