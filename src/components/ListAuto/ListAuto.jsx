import styles from './ListAuto.module.css';
import Loader from "../../Loader/Loader.jsx";
import {Progress} from "antd";

const ListAuto = (props) => {
    function showDutReport(auto) {
        }
        return (
            <>
            <input className={styles['search-field']+' '+styles['search-field__icon']} type="text" value={props.search}  onChange={event=>props.onChange(event.target.value)}></input>
            <div className={styles['list-auto']}>
                {!props.load?
                    props.filterListAuto.map(auto => (
                        <div onClick={e=>props.onClick(auto)} key={auto.Avton} className={styles['list-auto__item']}>
                            <Progress type="circle"
                                      strokeColor="orange"
                                      size={45}
                                      percent={auto && auto.hasOwnProperty('mzanalitic') ? auto.mzanalitic.count : 0}/>
                            <span className={styles.title}>{auto.Avton}</span>
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9.99995" cy="9.99995" r="9.99995"
                                        transform="matrix(1 0 -0.00767938 0.99997 1.0769 0.000244141)"
                                        fill={auto.online == 'true' ? '#BEEE10' : '#CACACC'}/>
                            </svg>
                            <svg width="20" height="26" viewBox="0 0 66 72"
                                 onClick={showDutReport(auto)}
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.08 16.92L63.12 16.88L48.24 2L44 6.24L52.44 14.68C48.68 16.12 46 19.72 46 24C46 29.52 50.48 34 56
                                     34C57.44 34 58.76 33.68 60 33.16V62C60 64.2 58.2 66 56 66C53.8 66 52 64.2 52 62V44C52 39.6 48.4 36 44 36H40V8C40
                                      3.6 36.4 0 32 0H8C3.6 0 0 3.6 0 8V72H40V42H46V62C46 67.52 50.48 72 56 72C61.52 72 66 67.52 66 62V24C66 21.24 64.88
                                       18.72 63.08 16.92ZM32 28H8V8H32V28ZM56 28C53.8 28 52 26.2 52 24C52 21.8 53.8 20 56 20C58.2 20 60 21.8 60 24C60 26.2
                                        58.2 28 56 28Z"
                                      fill={auto.showReport ? '#BCED0A' : '#E34F1B'}
                                />
                            </svg>
                        </div>
                    ))
                    : <Loader/>}
            </div>
            </>
        );
    }
;

export default ListAuto;