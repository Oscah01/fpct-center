import './Staff.css'
import StaffCard from './StaffCard';
import gallery14 from '../../assets/center14.JPG';
import gallery15 from '../../assets/center15.JPG';
import gallery19 from '../../assets/center19.JPG';
import gallery22 from '../../assets/center22.JPG';
import gallery24 from '../../assets/center24.JPG';
import gallery28 from '../../assets/center28.JPG';

const staffMembers = [
  { id: 1, image: gallery14, name: 'John Doe', position: 'Manager' },
  { id: 2, image: gallery15, name: 'Jane Smith', position: 'Assistant Manager' },
  { id: 3, image: gallery19, name: 'Robert Brown', position: 'HR Head' },
  { id: 4, image: gallery22, name: 'Emily Davis', position: 'Marketing Lead' },
  { id: 5, image: gallery24, name: 'Michael Johnson', position: 'Finance Lead' },
  { id: 6, image: gallery28, name: 'Sarah Wilson', position: 'Operations Manager' },
  { id: 7, image: gallery14, name: 'Chris Green', position: 'IT Specialist' },
  { id: 8, image: gallery15, name: 'Laura White', position: 'Admin Coordinator' },
  { id: 9, image: gallery19, name: 'James Black', position: 'Product Manager' },
  { id: 10, image: gallery22, name: 'Sophia Brown', position: 'Project Lead' },
  { id: 11, image: gallery24, name: 'William Scott', position: 'Compliance Officer' },
  { id: 12, image: gallery28, name: 'Olivia Taylor', position: 'Data Analyst' },
];

const Staff = () => {
  return (
    <>
     <div className='staff-header'>
        <h1>Fpct Center Management Staff</h1>
        </div>
    <div className="staff">
       
      <div className="row">
        {staffMembers.slice(0, 3).map((staff) => (
          <StaffCard key={staff.id} {...staff} />
        ))}
      </div>
      <div className="row">
        {staffMembers.slice(3, 6).map((staff) => (
          <StaffCard key={staff.id} {...staff} />
        ))}
      </div>
      <div className="row">
        {staffMembers.slice(6, 9).map((staff) => (
          <StaffCard key={staff.id} {...staff} />
        ))}
      </div>
      <div className="row">
        {staffMembers.slice(9, 12).map((staff) => (
          <StaffCard key={staff.id} {...staff} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Staff;
