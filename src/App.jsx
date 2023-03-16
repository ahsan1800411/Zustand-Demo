import './App.css';
import { usePeopleStore } from './store';

function App() {
  // const peoples = usePeopleStore((state) => state.peoples);
  // const addPeople = usePeopleStore((state) => state.addPerson);
  const fetchUsers = usePeopleStore((state) => state.fetchUsers);

  return (
    <>
      {/* {peoples?.map((people) => (
        <p key={people}>{people}</p>
      ))}
      <button onClick={() => addPeople('bilal')}>Add People</button> */}
      <button onClick={() => fetchUsers()}>Fetch Users</button>
    </>
  );
}

export default App;
