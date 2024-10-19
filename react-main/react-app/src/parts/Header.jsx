import './Parts.css'
function Header() {
    return (
        <>
            <div className='sign_cont'>
                <button className='sign_in'>
                    <p>
                        Sign in
                    </p>
                </button>
                <button className='sign_up'>
                    <p>
                        Sign up
                    </p>
                </button>
            </div>
        </>
    );
}
export default Header