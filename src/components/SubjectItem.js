import SolutionItem from './SolutionItem';

const SubjectItem = ({ name, item }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold"> {name} </h1>
      {item.map((item, idx) => (
        <SolutionItem key={idx} item={item}></SolutionItem>
      ))}
    </div>
  );
};

export default SubjectItem;
