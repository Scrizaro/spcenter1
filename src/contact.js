import React from "react";
import contactImg from './img/contact.png'

export default function Contact() {
    return (
        <div className='container'>
            <div className='flex-item'>
                <h1>Контакти центру</h1>
                <h4>Адреса</h4>
                <p className='about-us'>м. Київ, проспект Соборності 15, оф. 206.</p>
                <img  src={contactImg} alt='contact-img'/>
                <h4>Телефони</h4>
                <p className='about-us'>
                    +38 (067) 212 20 19 — Viber, Telegram Центру <br/>
                    +38 (097) 136 78 43 — Іван Князєв <br/>
                    +38 (067) 783 51 31 — Катерина Скляр <br/>
                </p>

            </div>
            <div className="flex-item">
                <h3> Варіанти оплати:</h3>
                <p className='about-us'>
                    - Оплата готівкою у нашому центрі. <br/>
                    - Оплата платіжними картами Visa та MasterCard - WayForPay. <br/> <br/>
                </p>
                <h3>Правила та умови надання послуг</h3>
                <p className="about-us">
                    <strong>Онлайн навчання </strong><br/>
                    Після оплати заняття, протягом 12 годин вам на пошту прийде лист з доступом до навчальних матеріалів.
                    <br/> <br/>
                    <strong>Офлайн навчання </strong> <br/>
                    Після оплати заняття, протягом 12 годин вам на пошту прийде лист з адресою та часом початку офлайн занять.
                </p>
                <h3>Умови повернення</h3>

                <p className="about-us">
                    Повернення коштів за сплачене заняття можливе, якщо заняття ще не було проведено відповідно до розкладу, опублікованого на сайті <br/> <br/>

                    Гроші за сплачене заняття, участь у якому Ви не змогли взяти через незалежні від нас причини, не повертаються. Відео цього заняття Вам надішле адміністратор на пошту, вказану Вами під час реєстрації.
                    <br/><br/>
                    Щоб зробити заявку на повернення коштів, зв'яжіться з адміністраторами через електронну пошту duhpsychology@gmail.com або за телефонами, вказаними у розділі "Контакти".
                    <br/><br/>
                </p>
            </div>
        </div>
    )
}