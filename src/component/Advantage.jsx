// import React from 'react';
// import { IonIcon } from '@ionic/react';
// import { lockClosedOutline, timerOutline, cashOutline } from 'ionicons/icons'; // Make sure to install react-ionicons if you want to use it like this
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCashRegister, faClock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';



const Advantages = () => {
    return (
        <section className="service" id="service">
            <div className="container">
                <h2 className="h2 section-title">Advantages That Set Us Apart</h2>
                <ul className="service-list">
                    <li>
                        <div className="service-card">
                            <div className="card-icon text-align-start">
                                {/* <IonIcon name="lock-closed-outline" /> */}
                                {/* <IonIcon icon={lockClosedOutline} style={{ fontSize: '24px', color: 'blue' }} /> */}
                                <FontAwesomeIcon icon={faLock} style={{ fontSize: '24px' }} />

                            </div>
                            <p className="advantages__icon-caption text-align-start">Safe & Secure</p>
                            <h3 className="h4 card-title text-align-start">
                                Lend with Friendly Support
                            </h3>
                            <p className="card-text text-align-start">
                                We are dedicated to linking you with trusted lenders who are ready to assist. Our streamlined process eliminates the hassle of visiting countless websites and filling out extensive paperwork.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="service-card">
                            <div className="card-icon">
                                {/* <IonIcon name="timer-outline" /> */}
                                {/* <IonIcon icon={timerOutline} style={{ fontSize: '24px', color: 'blue' }} /> */}
                                <FontAwesomeIcon icon={faClock} style={{ fontSize: '24px' }} />
                            </div>
                            <p className="advantages__icon-caption text-align-start">As Fast As 24 Hrs</p>
                            <h3 className="h4 card-title text-align-start">Speedy Loan Experience</h3>
                            <p className="card-text text-align-start">
                                For any loan inquiries, including application status, funded amount, payments, or related questions, contact your lender directly. If you've received a loan, you should have your lender's contact info.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="service-card">
                            <div className="card-icon">
                                {/* <IonIcon name="cash-outline" /> */}
                                {/* <IonIcon icon={cashOutline} style={{ fontSize: '24px', color: 'blue' }} /> */}
                                <i className="ion ion-lock-closed-outline" style={{ fontSize: '24px', color: 'blue' }}></i>
                                <FontAwesomeIcon icon={faMoneyBill} style={{ fontSize: '24px' }} />

                            </div>
                            <p className="advantages__icon-caption text-align-start">Loans from $500</p>
                            <h3 className="h4 card-title text-align-start">Your Choice, Your Loan</h3>
                            <p className="card-text text-align-start">
                                We understand that personal finances are private matters. Reasons for seeking a loan can vary widely, from urgent automobile repairs to unexpected medical bills and more.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Advantages;
