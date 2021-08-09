import Divider from '@material-ui/core/Divider';
import style from './DailySteps.module.scss';

const DailySteps = ({ task, userData, currentDate }) => {
    return (
        <div className='card'>
            <h2>{task.title}</h2>
            <Divider />
            <div>
                {userData.map(({ date, results }) => (
                    <>
                        {date === currentDate && (
                            <>
                                {results !== undefined ? (
                                    <div className={style.content}>
                                        <p>
                                            <span>כמות צעדים:</span>
                                            <span>{results}</span>
                                        </p>
                                    </div>
                                ) : (
                                    <p style={{ textAlign: 'center', marginTop: '10px' }}>אין נתוני מטופל</p>
                                )}
                            </>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default DailySteps;
