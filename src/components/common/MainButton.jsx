const MainButton = ({title, link}) => {
  return (
      <div>
        <button className="mb-4 primaryBtn">
            <a href={link} >
                {title}
            </a>
        </button>
      </div>
  );
};

export default MainButton; 