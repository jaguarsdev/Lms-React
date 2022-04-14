import React from 'react';
import { Provider } from 'react-redux';
// import store from './redux/store';


import Rootlayout from './components/layout/Rootlayout';
// import Coursescomponent from './components/courses/Coursescomponent';


function App() {
  return (
    <div className="container backdrop-blur bg-white/50 dark:bg-black/40 h-[90vh] w-[95vw] rounded-2xl overflow-y-hidden">
      {/* <Provider store={store}> */}
          <Rootlayout />
          {/* <Coursescomponent /> */}
      {/* </Provider> */}
      <h3>44</h3>
    </div>
  );
}

export default App;
