import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { getAll, pushElement, removeElement } from './services/apiService';

import style from './App.module.scss';
import DayPicker from './components/DayPicker/DayPicker';
import Medicine from './components/Medicine/Medicine';
import SideEffects from './components/SideEffects/SideEffects';
import Sidebar from './components/Sidebar/Sidebar';
import HeartRate from './components/HeartRate/HeartRate';

const cmpMap = {
    kalbeten: Medicine,
    doxylamine: Medicine,
    nausea: SideEffects,
    heartRate: HeartRate,
};

function App() {
    const [data, setData] = useState({});
    const [dateList, setDates] = useState([]);
    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        getAll().on('value', handleData);
        return () => {
            getAll().on('value', handleData);
        };
    }, []);

    const handleData = data => {
        setData(data.val());
        const dates = Object.entries(data.val().userData).map(([date]) => date);
        setDates(dates);
    };

    const handleVariantProps = type => {
        const props = {};
        props.task = data.tasks[type];
        const mapDates = Object.entries(data.userData).map(([date, value]) => {
            // console.log("value", value.tasks[type]);
            return {
                date,
                results: value.tasks[type],
                // results: Object.entries(value.tasks[type] || {}),
            };
        });
        props.userData = mapDates;
        return props;
    };

    return (
        <div className={style.wrapper}>
            <header className='App-header'>{dateList.length > 0 && <DayPicker dates={dateList} onSelectDate={setCurrentDate} selectedDate={currentDate} />}</header>
            <div className={style.inner}>
                {data.carePlans && <Sidebar currentElements={data.carePlans[1].elements} addElement={pushElement} />}
                <div className={style.content}>
                    {data.carePlans &&
                        data.carePlans[1].elements.map(({ id }) => {
                            const Component = cmpMap[id];

                            return (
                                Component && (
                                    <div className='cardWrapper'>
                                        <Component key={id} {...handleVariantProps(id)} currentDate={currentDate} onRemoveElement={removeElement} />
                                        <Button variant='contained' color='secondary' className='hey' startIcon={<DeleteIcon />} onClick={() => removeElement(id)}>
                                            מחק
                                        </Button>
                                    </div>
                                )
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;
