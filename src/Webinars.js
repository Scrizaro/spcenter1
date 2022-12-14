import React from "react";
import './Main.css';

export default function Webinars() {
    return (
        <div className="container">
            <div className='flex-item'>
                <h1>Кохання та стосунки: розвиток у парі.</h1>
                <h3>Дати проведення: 07.09.2022 та 14.09.2022 о 18:00-20:30</h3>
                <p className='about-us left'>
                    Семінар «Чоловік та жінка. Сила любові та єдності протилежностей»
                    <br/> <br/>
                    1. Чоловіче і жіноче, інь-ян-два головні принципи всесвіту: завдання, сенс, прояви в різних сферах життя і особливо в коханні <br/>
                    2. Ми пізнаємо Всевишнього почуттям любові. <br/>
                    3. Кохання як рушійна сила еволюції. Рівні кохання – рівні свідомості. Види кохання.<br/>
                    4. Кохання як відносини, як здатність, як почуття. Відмінність кохання з інших станів.<br/>
                    5. Кохання, вміння виражати її і відчувати, приймати та дарувати.<br/>
                    6. Коли починається кохання і коли закінчується.<br/>
                    7. Чи вмієте ви любити? Навіщо потрібні стосунки? Навіщо ми створюємо серйозні відносини? У чому їхня відмінність від просто відносин?<br/>
                    8. Якості необхідні розвитку любові.<br/>
                    9. Різноманітність прояву кохання.<br/>
                    10. Кохання та прихильність: відмінність.<br/>
                    11. Формування «поля кохання».<br/>
                    12. Кохання у сім'ї.<br/>
                    13. Усвідомленість у коханні. Кохання як внутрішній стан, і кохання як зовнішній прояв.<br/>
                    14. Любов до себе, і усвідомлений вираз цієї любові через емоції та почуття<br/>
                    15. Відданість як злиття з універсальною вібрацією любові.<br/>
                    16. Що таке близькість? Чи готовий ти до неї?<br/>
                    17. Справжній чоловік: основні риси, прояви, становлення.<br/>
                    18. Справжня жінка: основні риси, прояви, розвиток.<br/>
                    19. Прояв космічних законів у відносинах для людей. До чого призводить їх порушення?<br/>
                    20. Душа Любові як найвищий витвір пари<br/>
                    21. Сексуальність: її відтінки, що у житті, її прояв під час дотиків.<br/>
                    22. Енергетична взаємодія у парі.<br/>
                    23. Мистецтво розслаблення.<br/>
                    24. Спілкування через дотик, вміння користуватися мовою дотиків.<br/>
                    25. Тіло як мікрокосмос Цілого де можна відчути весь Всесвіт.<br/>
                </p>

            </div>
            <div className="flex-item">
                <form action="mail.php" method='POST'>

                    <input type="text" name='fname' placeholder="Ім'я" required/>

                    <input type="text" name='sname' placeholder='Прізвище' required/>

                    <input type="email" name='email' placeholder='Email' required/>

                    <input type="email" name='phone' placeholder='Телефон' required/>
                    <input className='form-sub' type="submit" value="Записатися"/>
                </form>
            </div>
        </div>
    )
}