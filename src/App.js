import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Rootlayout from './components/layout/Rootlayout'
import GetCoursed from './components/layout/main/details-page/get/Getcoursed';
import CartPage from './redux/cart/cartPage';

function App() {
  return (
    <div className="container backdrop-blur bg-white/50 dark:bg-black/40 h-[90vh] w-[95vw] rounded-2xl overflow-y-hidden font-yekb">
      <Provider store={store}>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/course/:id" element={<GetCoursed />} />
          <Route path="/" element={<Rootlayout />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
