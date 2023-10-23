import logo from './logo.svg';
import './App.css';
import { FilterTwo} from './components/Sidebar';
// import { FilterOne } from './components/Filter';
import { PaginationOne } from './components/Pagination';
import JobComponent from './components/JobComponent';
import Card2 from './components/Card2';

function App() {
  return (
    <div>
    <div>
      <FilterTwo />
      {/* <JobComponent/> */}
      <Card2 />
    </div>
    
    <PaginationOne />
    </div>
  );
}

export default App;
