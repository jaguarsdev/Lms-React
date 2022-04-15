
import { Provider } from 'react-redux';
import store from './redux/store';

import Rootlayout from './components/layout/Rootlayout'
import Getcourses from './components/api/courses/Getcourses'

function App() {
  return (
    <div className="container backdrop-blur bg-white/50 dark:bg-black/40 h-[90vh] w-[95vw] rounded-2xl overflow-y-hidden font-yekb">
      <Provider store={store}>
        <Rootlayout />
        <Getcourses />
      </Provider>
    </div>
  );
}

export default App;
