import Navigation from './Navigation.jsx';
const header = ({ changePage }) => {
  return (
    <header className='rounded-t-2xl bg-grey-color'>
      <Navigation changePage={changePage} />
      <h1 className='text-center fs-1 py-3'>Luke Skywalker</h1>
    </header>
  );
};

export default header;
