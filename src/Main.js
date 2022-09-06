import React from "react";
import './Main.css'
import topImg from './img/top-img.jpeg'
import duhPsy from './img/duhpsy.jpg'
import consult from './img/consult.jpg'
import subPsy from './img/subpsy.jpg'
import taro from './img/taro.jpeg'
export default function Main() {
    return (
        <main className='container'>
            <div className='flex-item'>
                <div className='top-img'>
                <img  src={topImg} alt='#'/>
                </div>
                <h1>Центр супраментальної психології</h1>
                <p className='spn-gray'>Людина - це Всесвіт. І в ньому як у Всесвіті є все! </p>
                <p className='about-us'> Приєднуйся до нашої спільноти!</p>
                <br/>
                <button className="btn-sub" role="button"><a href="/webinars">Вебінари</a></button>
            </div>
            <div className='flex-item'>
                <h2>Про нас</h2>
                <p className='about-us' >Мене звуть Скляр Катерина, і я засновник та провідний тренер навчальних програм у Центрі супраментальної психології. <br/>
                    Понад 20 років я працюю астрологом, духовним психологом та тренером. <br/><br/> Ця професія дозволила мені здобути досвід спілкування з дуже великою кількістю людей. Багато років я допомагала людям шукати відповіді на свої питання, розбиратися в особливостях своєї долі, змінювати долю, шукати та знаходити вихід із проблем зі здоров’ям, кар’єрою, особистим життям, виходити з криз,
                    виховувати дітей згідно з духовними знаннями.</p>
            </div>
            <div className='flex-item'>
                <h2>Послуги та консультації</h2>

                    <div className='card'>
                        <img src={duhPsy} alt='img'/>
                        <h4>Духовна психологія</h4>
                        <p>Базовий курс навчання, спрямований формування цілісного світогляду, <br/> духовний розвиток людини, вдосконалення власної долі, долі близьких.</p>
                        <button className="btn-sub" role="button"><a href="/duhpsy">Детальніше</a></button>
                    </div>

                    <div className='card'>
                        <img src={subPsy} alt='img'/>
                        <h4>Курс Супраментальної психології</h4>
                        <p>У такому контексті «Всесвіт – Людина» є внутрішній і зовнішній світ: ці світи взаємопов’язані та взаємопізнавані. Внутрішній світ має прояви на різних рівнях. Принцип багатовимірності простору – один із основних принципів супраментальної психології.</p>
                        <button className="btn-sub" role="button"><a href="/subpsy">Детальніше</a></button>
                    </div>

                    <div className='card'>
                        <img src={taro} alt='img'/>
                        <h4>Курс Таро</h4>
                        <p>Мудрість, викладена у Старших Арканах, описує всю еволюцію людини і Всесвіту.
                            Філософія Старших Арканів свідчить, що цілісність — це наша природа. Коли ми пізнаємо свою справжню природу, ми отримуємо у винагороду Всесвіт і в ній знову відкриваємо себе.</p>
                        <button className="btn-sub" role="button"><a href="/taro">Детальніше</a></button>
                    </div>

                    <div className='card'>
                        <img src={consult} alt='img'/>
                        <h4>Консультації</h4>
                        <p>Індивідуальні консультації</p>
                        <button className="btn-sub" role="button" ><a href="/consult">Детальніше</a></button>
                    </div>
            </div>
        </main>
    )
}