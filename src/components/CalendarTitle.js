import React from 'react';
import TextTruncate from 'react-text-truncate';

const CalendarTitle = ({title}) => {
    return (
    <div className="flexColumn">
      <div style={{width: '100%', textAlign: 'center'}}>
        <TextTruncate line={1} truncateText={'-'} text={title} textTruncateChild={null}/>
      </div>
    </div>
    )
};

CalendarTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default CalendarTitle;
