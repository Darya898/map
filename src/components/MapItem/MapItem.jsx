import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import styles from './Map.module.css';
import ListAuto from "../ListAuto/ListAuto.jsx";
import {useEffect, useMemo, useState} from "react";
import {dataAuto} from "../../data.js";
import L from 'leaflet';


const MapItem = () => {
    let centerMap = [55.0689783333, 82.70148];
    let zoom = 13;
    const [map, setMap] = useState(null);
    const [listAuto, setListAuto] = useState([]);
    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(true);
    const myIcon = new L.Icon({
        iconUrl: ('../../assets/auto.svg'),
        iconSize: [64, 64],
    });

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
            setListAuto(Object.values(dataAuto).map(i => ({...i, showReport: false})))
        }, 1000);
    }, []);

    const filterListAuto = useMemo(() => {
        return listAuto.filter(i => i.Avton.toLowerCase().includes(search.toLowerCase()))
    }, [search, listAuto]);

    const filterAutoWithCoord = useMemo(() => {
        return filterListAuto.filter(i => i.x && i.y)
    }, [filterListAuto]);
    const getCurrentAuto = (auto) => {
        if (auto.y && auto.x) {
            map.setView([+auto.y, +auto.x], map.getZoom());
            window.dispatchEvent(new Event('resize'));
        }
    }
    return (
        <>
            <MapContainer
                ref={setMap}
                scrollWheelZoom={true}
                className={styles.map}
                center={centerMap}
                zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filterAutoWithCoord.map(auto => (
                    <Marker key={auto.Avton} position={[+auto.y, +auto.x]} icon={myIcon}>

                    </Marker>
                ))}
            </MapContainer>
            <ListAuto filterListAuto={filterListAuto}
                      load={load}
                      search={search}
                      onClick={auto => getCurrentAuto(auto)}
                      onChange={(e) => setSearch(e)}/>
        </>
    );
};

export default MapItem;