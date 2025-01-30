import { useState } from 'react';
import Meetings from './Meetings';
import Events from './Events';
import Seminars from './Seminars';
import Workshops from './Workshops';
import './MeetingAndEvents.css'; // Import the main CSS file

const MeetingAndEvents = () => {
  const [activePage, setActivePage] = useState('meetings');

  return (
    <div className="meeting-events-container">
      <h1 className='events-heading'>Meeting & Events</h1>
      <div className="tabs">
        <button
          className={activePage === 'meetings' ? 'active' : ''}
          onClick={() => setActivePage('meetings')}
        >
          Meetings
        </button>
        <button
          className={activePage === 'events' ? 'active' : ''}
          onClick={() => setActivePage('events')}
        >
          Events
        </button>
        <button
          className={activePage === 'seminars' ? 'active' : ''}
          onClick={() => setActivePage('seminars')}
        >
          Seminars
        </button>
        <button
          className={activePage === 'workshops' ? 'active' : ''}
          onClick={() => setActivePage('workshops')}
        >
          Workshops
        </button>
      </div>

      <div className="content">
        {activePage === 'meetings' && <Meetings />}
        {activePage === 'events' && <Events />}
        {activePage === 'seminars' && <Seminars />}
        {activePage === 'workshops' && <Workshops />}
      </div>
    </div>
  );
};

export default MeetingAndEvents;
