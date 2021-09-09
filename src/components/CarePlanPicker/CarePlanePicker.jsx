import Button from '@material-ui/core/Button';
import React from 'react';
import style from './CarePlanePicker.module.scss';

const CarePlanePicker = ({ carePlans, onSelectCarePlan }) => {
    return (
        <div className={style.carePlans}>
            {carePlans.length > 0 &&
                carePlans.map((plan, index) => (
                    <Button variant='outlined' color='primary' key={index} onClick={() => onSelectCarePlan(index)} className={style.plan}>
                        {plan.description}
                    </Button>
                ))}
        </div>
    );
};

export default CarePlanePicker;
