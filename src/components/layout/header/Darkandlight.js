
const Darkandlight = () => {


    const tapDark = () =>{
        if( document.getElementById('html').classList.value.indexOf('dark') < 0 ){
            document.getElementById('html').classList.add('dark')
        } else {
            document.getElementById('html').classList.remove('dark')
        }
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