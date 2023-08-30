import MainPage from './components/MainPage';
import PageHeader from './components/PageHeader';
import AppContextProvider from './contexts/AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <header>
          <PageHeader />
        </header>

        <main>
          <MainPage />
        </main>
      </AppContextProvider>
    </div>
  );
}

export default App;
