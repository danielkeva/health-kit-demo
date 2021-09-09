import React from 'react';
import style from './HeartRate.module.scss';
import Divider from '@material-ui/core/Divider';

const HeartRate = ({ task, userData, currentDate }) => {
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
                                <>
                                    {results ? (
                                        <div className={style.content}>
                                            <p>
                                                <span>דופק מינימלי</span>
                                                <span>{results.min}</span>
                                            </p>
                                            <p>
                                                <span>דופק מקסימלי</span>
                                                <span>{results.max}</span>
                                            </p>
                                            <p>
                                                <span>דופק ממוצע</span>
                                                <span>{results.average}</span>
                                            </p>
                                        </div>
                                    ) : (
                                        <p style={{ textAlign: 'center' }}>אין נתוני מטופל</p>
                                    )}
                                </>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeartRate;
