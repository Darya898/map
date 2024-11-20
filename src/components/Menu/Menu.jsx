import {routerData} from "../../config/RouterConfig.jsx";
import styles from './Menu.module.css';
import {Link} from "react-router-dom";

const Menu = (props) => {
    const menuList=routerData.find(i=>i)?.children;
    return (
        <nav className={styles.nav} >
            <ul className={styles.menu}>
            {menuList.map((menu)=>(
                <li className={styles['menu-item']}
                    key={menu.title}
                >
                    <Link className={styles['menu-item__link']}
                    to={menu.element}
                    >
                    <div className={styles['menu-item__wrapper']}>
                      <img src={`../assets/menu/${menu.image}.svg`} />
                    </div>
                    {props.open&&
                        <span className={styles.title}>{menu.title}</span>
                    }
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;