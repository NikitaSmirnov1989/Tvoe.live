import styles from "./Menu.module.css";
import menu from "../../../public/data-files/menu-data/menu-data.js";




export default function Menu(){
    return  <div className={styles.menu}>
                <div className={styles.wrapper}>
                    <div className={styles.menu}>
                        {menu.map(({title, Img}, i) => {
                            return  <div key={i} className={styles.tape}>
                                        <div className={styles.img}>
                                            <Img className={styles.svg}/>
                                        </div>
                                        <div className={styles.title}>
                                            {title}
                                        </div>
                                    </div>
                        })}
                    </div>                            
                </div>
            </div>
}