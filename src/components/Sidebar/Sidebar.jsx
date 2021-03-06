import React from 'react';
import style from './Sidebar.module.scss';
import Button from '@material-ui/core/Button';
import CarePlanePicker from '../CarePlanPicker/CarePlanePicker';

const elements = [
    { id: 'doxylamine', title: 'נטילת דוקסילמין' },
    { id: 'kalbeten', title: 'נטילת קל בטן' },
    { id: 'heartRate', title: 'מעקב דופק' },
    { id: 'dailySteps', title: 'מעקב צעדים יומי' },
    { id: 'dailyTrain', title: 'מעקב אימון יומי' },
    { id: 'nausea', title: 'מעקב אחר בחילה' },
    { id: 'bandage', title: 'מעקב אחר הוראות טיפול' },
];

const Sidebar = ({ currentElements = [], addElement, carePlans, onSelectCarePlan }) => {
    const isDisabled = id => {
        const exist = currentElements.find(el => el.id === id);
        return !!exist;
    };

    return (
        <div className={style.sidebar}>
            {carePlans?.length > 0 && <CarePlanePicker carePlans={carePlans} onSelectCarePlan={onSelectCarePlan} />}
            {elements.map(({ id, title }) => (
                <div key={id} className={style.sidebarItem}>
                    <p className={style.title}>{title}</p>
                    <Button variant='outlined' color='primary' disabled={isDisabled(id)} onClick={() => addElement(id)}>
                        הוספה
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
