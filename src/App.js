import './App.css';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFactAction } from './store/actions';
import Fact from './components/Fact';
import Radium, { StyleRoot } from 'radium';
import { pulse } from 'react-animations';

function App() {
  const dispatch = useDispatch();
  const fact = useSelector((state) => state.currentFact);
  const loading = useSelector((state) => state.loading);

  const fetchFact = useCallback(() => {
    dispatch(fetchFactAction());
  }, [dispatch]);

  useEffect(() => {
    fetchFact();
  }, [fetchFact]);

  const styles = {
    pulse: {
      marginTop: 30,
      padding: 20,
      cursor: 'pointer',
      animation: 'x 1s infinite',
      animationName: Radium.keyframes(pulse, 'pulse'),
    },
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {loading ? (
          <div className='loader'>Loading...</div>
        ) : (
          <>
            <Fact fact={fact} />

            <StyleRoot>
              <button style={styles.pulse} className='another-button' onClick={fetchFact}>
                GET ANOTHER FACT
              </button>
            </StyleRoot>
          </>
        )}
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
