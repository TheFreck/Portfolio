import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

export const PersonalStatement = props => {
    let then = new moment('8/1/2018');
    let now = new moment();
    let timeSpan = moment.duration(now.diff(then));
    let duration = "";
    if (timeSpan.get('months') >= 6) {
        duration = timeSpan.get('years') + ' and a half years';
    }
    else {
        duration = timeSpan.get('years') + ' years';
    }
    return (
        <div className="element-body">
            <h1 id="section-title">Personal Statement</h1>
            <p id="statement-text">Full stack web developer and object oriented programmer with over { duration } experience using C# and JavaScript. A lifetime love of mathematics and learning as well as experience in economics and finance, solving complex models and interpreting data. An ambitious self starter with an easygoing personality which allows for productive group work as well as high quality individual contributions. High tolerance for complexity in the overall project goals and the individual details which make the solutions come to life and a focus on design to simplify the user experience.</p>
        </div>
    );
}

export default PersonalStatement;