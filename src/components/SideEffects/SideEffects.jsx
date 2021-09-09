import React from 'react';
// import style from "./SideEffects.module.scss";
import Divider from '@material-ui/core/Divider';
const SideEffects = ({ task, userData, currentDate }) => {
    return (
        <div className='card'>
            <h2>{task.title}</h2>
            <Divider />
            <div>
                <p className='subTitle'>
                    <span>תכנית טיפול:</span> <span>{task.instructions}</span>
                </p>
                <div>
                    {userData.map(({ date, results }, index) => (
                        <>
                            {date === currentDate && (
                                <div key={index} style={{ textAlign: 'center' }}>
                                    {results ? (
                                        <>
                                            <span>כמות הפעמים שדווח על תופעות לוואי:</span> <span>{results}</span>
                                        </>
                                    ) : (
                                        <p>אין נתוני מטופל</p>
                                    )}
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideEffects;
