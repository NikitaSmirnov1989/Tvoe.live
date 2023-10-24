import styles from "./Content.module.css";
import Image from 'next/image';
import news from "../../../public/data-files/content-data/content-text-data.js";
import cards from "../../../public/data-files/content-data/content-cards-data.js";
import reactions from "../../../public/data-files/content-data/content-reactions-data.js"
import Arrow from "../../../public/img-files/content-images/10-arrow.svg";
import Opened from "../../../public/img-files/content-images/opened.svg";
import Fire from "../../../public/img-files/content-images/fire.svg";

export default function Content(){
    return  <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.main}>
                        <div className={styles.tapes}>
                            <h2 className={styles.h2}>Лента</h2>
                            <div className={styles.content_news}>
                                <div className={styles.news}>
                                    <div className={styles.news_img}>
                                        <Arrow/>
                                    </div>
                                    <div className={styles.news_title}>
                                
                                        <div>Сотни россиян застряли в Египте из-за отмены рейса</div>
                                        <div>
                                            <div className={styles.time}>14:59</div>
                                            <div className={styles.tag}>Политика</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.news}>
                                    <div className={styles.news_img}>
                                        <Arrow/>
                                    </div>
                                    <div className={styles.news_title}>
                                        
                                        <div>На Украине заявии о невполнимых потерях российских ударов</div>
                                        <div>
                                            <div className={styles.time}>14:59</div>
                                            <div className={styles.tag}>Политика</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.news}>
                                    <div className={styles.news_img}>
                                        <Arrow/>
                                    </div>
                                    <div className={styles.news_title}>
                                        
                                        <div>ЕС вел санкции против силовиковиз Крыма из-за дела в отношении журналиста</div>
                                        <div>
                                            <div className={styles.time}>14:59</div>
                                            <div className={styles.tag}>Политика</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.news}>
                                    <div className={styles.news_img}>
                                        <Arrow/>
                                    </div>
                                    <div className={styles.news_title}>
                                        
                                        <div>Резников назвал профессионалом нового министра обороны Украины Умерова</div>
                                        <div>
                                            <div className={styles.time}>14:59</div>
                                            <div className={styles.tag}>Политика</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.running_line}>
                                <span className={styles.running_text}>
                                    <div className={styles.wrapper}>
                                        <Fire/>Очень важная информация
                                    </div>
                                </span>
                                <span className={styles.running_text}>
                                    <div className={styles.wrapper}>
                                        <Fire/>Очень важная информация
                                    </div>
                                </span>
                                <span className={styles.running_text}>
                                    <div className={styles.wrapper}>
                                        <Fire/>Очень важная информация
                                    </div>
                                </span>
                                <span className={styles.running_text}>
                                    <div className={styles.wrapper}>
                                        <Fire/>Очень важная информация
                                    </div>
                                </span>
                                <span className={styles.running_text}>
                                    <div className={styles.wrapper}>
                                        <Fire/>Очень важная информация
                                    </div>
                                </span>
                                <span className={styles.running_text}>
                                    <div className={styles.wrapper}>
                                        <Fire/>Очень важная информация
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className={styles.advartisment_block}>
                            <h3 className={styles.h3}>Ссылка на сайта</h3>
                            <div className={styles.advartisment_image}>
                                Реклама
                            </div>
                            <div className={styles.advartisment_title}>
                                Текст длинного рекламного объявления
                            </div>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.title_block}>
                            <h2 className={styles.h2}>Читайте также <Opened className={styles.opened}/></h2>
                        </div>
                        <div className={styles.texts}>
                            {news.map((item, i) => {
                                return  <div key={i} className={styles.texts_item}>
                                            <div className={styles.texts_info}>
                                                <div className={styles.tag}>Политика</div>
                                                <div className={styles.time}>{item.time}</div>
                                            </div>
                                            <div className={styles.title}>
                                                {item.title}
                                            </div>
                                            <div className={styles.reactions}>
                                                {reactions.map(({Smile, count}, i) => {
                                                    return  <div className={styles.reaction} key={i}>
                                                                <div className={styles.smile}><Smile/></div>
                                                                <div className={styles.count}>{count}</div>
                                                            </div>
                                                })}
                                            </div>

                                        </div>
                            })}
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.title_block}>
                            <h2 className={styles.h2}>Читайте также <Opened className={styles.opened}/></h2>
                        </div>
                        <div className={styles.cards_item}>
                            {cards.map(({Img, time, title}, i) => {
                                return  <div key={i} className={styles.card_item}>
                                            
                                            <div className={styles.card_img}><Img/></div>
                                            <div className={styles.time}>{time}</div>
                                            <div className={styles.title}>{title}</div>
                                            <div className={styles.reactions}>
                                            {reactions.map(({Smile, count}, i) => {
                                                return  <div className={styles.reaction} key={i}>
                                                            <div className={styles.smile}><Smile/></div>
                                                            <div className={styles.count}>{count}</div>
                                                        </div>
                                            })}
                                            
                                            </div>

                                        </div>
                            })}
                        </div>
                    </div>                        
                </div>
            </div>
}