import styles from "./Footer.module.css";
import Image from 'next/image';
export default function Footer(){
    return  <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <div className={styles.logos}>
                        <div className={styles.logo}>ЛОГО</div>
                        <div className={styles.description}>© НАЗВАНИЕ 2023. Все права защищены</div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.column}>
                            <div>Контакты</div>
                            <div>Редакция</div>
                        </div>
                        <div className={styles.column}>
                            <div>Политика конфиденциальности</div>
                            <div>Условия использования</div>
                            <div>Реклама</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.link}>По любым вопросам <br/>пишите на <a href="">privet@yandex.com</a></div>
                            <div>Подписаться</div>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <button>Предложить новость</button>
                    </div>
                </div>
            </div>
}