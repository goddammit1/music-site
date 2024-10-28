import React from "react";
import PsychosisImg from "./avatars/psychosis.jpg";
import TorontokyoImg from "./avatars/torontokyo.jpg";

const Lyrics = () => {
    return (
        <div className="stroke">
            <div className="lyric_panel">
                <div className="lyric">
                    [Припев: Psychosis]
                    <br/>
                    Разрушаю мир, ранен, но не убит
                    <br/>
                    Почему кто-то решил, что мне не похуй на них?
                    <br/>
                    Неконтролируемый трип, смехом закрываю крик
                    <br/>
                    По мне не видно может быть, но я б каждого здесь убил
                    <br/>
                    Я бы каждого убил, я б остался здесь один
                    <br/>
                    То, что я жрал в одно лицо, столько б свалило двоих
                    <br/>
                    Меня не интересуют переломанные судьбы
                    <br/>
                    Я вижу в зеркале тварь и просто скалю ему зубы
                    <br/>
                    (Я смотрю на него и просто улыбаюсь)
                    <br/>
                    <br/>
                    [Куплет 1: Psychosis]
                    <br/>
                    Не говори так, будто ты мне брат, а
                    <br/>
                    Ненависть в глазах, а
                    <br/>
                    Ты меня не купишь, хоть, сука, ограбишь банк, а
                    <br/>
                    Ментальный удар, yeah
                    <br/>
                    Не нравлюсь этому миру
                    <br/>
                    Мне плевать, я устал
                    <br/>
                    Но злость на вас даёт мне силы
                    <br/>
                    (Злость на вас, злость на вас)
                    <br/>
                    <br/>
                    [Куплет 2: TORONTOKYO]
                    <br/>
                    Ты в моей кровати, поцелуй меня, ho
                    <br/>
                    Ты в любимом платье, это не любовь, yo
                    <br/>
                    Не любовь, ho, ты so br /oke, yo
                    <br/>
                    Ты одна, ho, все игра, ho
                    <br/>
                    Знаю, я те нравлюсь, поцелуй меня, ho
                    <br/>
                    Ты в любимом платье, я твой новый плейбой
                    <br/>
                    Поцелуй меня, ho, завтра я чужой, ho
                    <br/>
                    В голове изгой я, чувствую звездой, yeah
                    <br/>
                    (Чувствую звездой, yeah, чувствую звездой, yeah)
                    <br/>
                    (Чувствую…)
                    <br/>
                    <br/>
                    [Предприпев: Psychosis]
                    <br/>
                    Вы не можете ответить, вам не дозволено думать
                    <br/>
                    Ты не поняла, блядь, потому что ты тупая сука
                    <br/>
                    Я очень бледный на вид, я не помню вас, назовитесь
                    <br/>
                    Уже давно выпилился бы, но продолжаешь ныть
                    <br/>
                    <br/>
                    [Припев: Psychosis]
                    <br/>
                    Разрушаю мир, ранен, но не убит
                    <br/>
                    Почему кто-то решил, что мне не похуй на них?
                    <br/>
                    Неконтролируемый трип, смехом закрываю крик
                    <br/>
                    По мне не видно может быть, но я б каждого здесь убил
                    <br/>
                    Я бы каждого убил, я б остался здесь один
                    <br/>
                    То, что я жрал в одно лицо, столько б свалило двоих
                    <br/>
                    Меня не интересуют переломанные судьбы
                    <br/>
                    Я вижу в зеркале тварь и просто скалю ему зубы
                </div>
                <footer>
                    <div className="footer">
                    </div>
                </footer>
            </div>
            <div className="actorss">
                <div className="actors">
                    <div className="actors_name">
                        <h1>psychosis</h1>
                    </div>
                    <div className="actorsimg">
                        <img className="actors_img" src={PsychosisImg} alt="psychosis"/>
                    </div>
                </div>
                <div className="actors">
                    <div className="actors_name">
                        <h1>torontokyo</h1>
                    </div>
                    <div className="actorsimg">
                        <img className="actors_img" src={TorontokyoImg} alt="torontokyo"/>
                    </div>
                </div>
            </div>

        </div>
    )
        ;
};

export default Lyrics;