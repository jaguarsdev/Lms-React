import Mobilemenu from './Mobilemenu'
import Logoheader from './Logoheader'
import Menuheader from './Menuheader'
import Accoundheader from './Accoundheader'

const Rootheader = () => {
  
  return (
    <header className="flex items-center justify-between py-1 px-3 border-b dark:border-gray-600 dark:text-white border-white text-black">
      <Mobilemenu />
      <Logoheader />
      <Menuheader />
      <Accoundheader />
    </header>
  );
};

export default Rootheader;