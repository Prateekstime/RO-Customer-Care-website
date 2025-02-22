
import "./Opening.css";
const Opening = () => {
  const jobListings = [
    {
      title: "Category Manager",
      department: "Business",
      location: "Kolkata",
    },
    {
      title: "Category Manager",
      department: "Business",
      location: "Kolkata",
    },
    {
      title: "Category Manager",
      department: "Business",
      location: "Kolkata",
    },
    {
      title: "Category Manager",
      department: "Business",
      location: "Kolkata",
    },
    {
      title: "Category Manager",
      department: "Business",
      location: "Kolkata",
    },
    {
      title: "Category Manager",
      department: "Business",
      location: "Kolkata",
    },
  ];

  return (
    <>
      <section className="openings-section">
        <h2>Recent Openings</h2>
        <div className="job-list">
          {jobListings.map((job, index) => (
            <div className="job-item" key={index}>
              <span className="job-title">{job.title}</span>
              <span className="job-department">{job.department}</span>
              <span className="job-location">{job.location}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Opening;
