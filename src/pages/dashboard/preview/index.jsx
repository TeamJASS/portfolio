const Preview = () => {
  return (
    <div>
      <h1>Preview</h1>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const initialState = {
  user: {
    firstName: "John",
    lastName: "Doe",
    professionalTitle: "Software Developer",
    aboutMe: "Passionate developer with a love for coding.",
    projects: [
      { title: "Project 1", description: "Description 1", link: "#" },
      { title: "Project 2", description: "Description 2", link: "#" },
    ],
    skills: ["JavaScript", "React", "Node.js"],
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
    },
  },
};

export default Preview;
