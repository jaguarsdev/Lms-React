
const Darkandlight = () => {


    const tapDark = () =>{
        if( document.getElementById('html').classList.value.indexOf('dark') < 0 ){
            document.getElementById('html').classList.add('dark')
            document.getElementById('body').classList.add('bodydark')
        } else {
            document.getElementById('html').classList.remove('dark')
            document.getElementById('body').classList.remove('bodydark')
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