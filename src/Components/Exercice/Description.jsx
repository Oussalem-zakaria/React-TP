const ExerciseDescription = ({ title, description }) => {
  return (
    <div className="container mx-auto mt-7 py-5 px-10 bg-blue-50 rounded-md shadow-md">
      <h2 className="text-2xl font-bold py-2">{title}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ExerciseDescription;
