import styles from "./Header.module.css";
import Image from 'next/image';
import search from "../../../public/img-files/header-images/search.svg";
import signIn from "../../../public/img-files/header-images/sign-in.svg"
import chips from "../../../public/data-files/header-data/header-data.js";
import icons from "../../../public/data-files/header-data/icons-data.js";

export default function Header(){
    return  <div className={styles.header}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        Лого
                    </div>
                    <div className={styles.content}>
                        <div className={styles.chips}>
                            {chips.map((chip, i) => {
                                return <div 
                                            key={i}
                                            className={styles.chip}>
                                                <div className={styles.img}><Image src={chip.url} width={16} height={16}/></div>
                                                <span className={styles.title}>{chip.title}</span>
                                                </div>
                            })}
                        </div>
                        <div className={styles.icons}>
                            {icons.map((icon, i) => {
                                return <div key={i}>
                                            <Image 
                                                src={icon}
                                                width={18}
                                                height={18}
                                            />
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
}