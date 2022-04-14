import { themeDark,  } from "../../../redux/darknight(off)/darknightActions"
// import { useSelector, useDispatch } from "react-redux";



const Darkandlight = () => {

    // const state = useSelector( state => state );
    // const dispatch = useDispatch();
    const tapDark = () =>{
        if( document.getElementById('html').classList.value.indexOf('dark') < 0 ){
            document.getElementById('html').classList.add('dark')
        } else {
            document.getElementById('html').classList.remove('dark')
        }
        // dispatch(themeDark())
    }

    return (
        <div>
            <label className="dayNight">
                <input type="checkbox" onClick={() => tapDark()}/>
                {/* onClick={clickHandler}  */}
                <div></div>
            </label>
        </div>
    );
}

export default Darkandlight;