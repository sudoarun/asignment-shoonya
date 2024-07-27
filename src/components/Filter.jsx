import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";

const Filter = () => {
  return (
    <div className="sm:flex justify-between items-center">
      <SelectInput />
      <SearchInput />
    </div>
  );
};

export default Filter;
