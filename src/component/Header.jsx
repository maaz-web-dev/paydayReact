// import React from 'react';
// import './assets/css/style.css'; // Make sure the path matches your project structure
import logo from '../assets/images/DSCLOGO.jpg';
export const Header = () => {
    return (
        <header data-header>
            <div className="overlay" data-overlay></div>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} width="54" alt="doorestepcash logo" />
                </a>
                <button className="nav-open-btn" data-nav-open-btn>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
                <nav className="navbar" data-navbar>
                    <button className="nav-close-btn" data-nav-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#home" className="navbar-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="./Pages/aboutUs.html" className="navbar-link">About</a>
                        </li>
                    </ul>
                    <a href="./form/form.html">
                        <button className="btn btn-primary">Let's Started</button>
                    </a>
                </nav>
            </div>
        </header>

    );
};

export const Main = () => {
    return (
        <main>
            <article>
                {/* Your main content goes here */}
            </article>
        </main>
    );
};

// const App = () => {
//     return (
//         <div id="top">
//             <Header />
//             <Main />
//             {/* You can add other components here as your site grows */}
//         </div>
//     );
// };

// export default App;
