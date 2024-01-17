import './Account.css';
import Login from "../Login/Login.jsx";

export default function Account () {
    return (
        <>
            <main className='main-outer-container'>
                <section className='main-inner-container'>
                    <h1>Account</h1>
                    <p>Alleen toegankelijk door in te loggen </p>
                    <Login/>



                </section>
            </main>
        </>
    )
}