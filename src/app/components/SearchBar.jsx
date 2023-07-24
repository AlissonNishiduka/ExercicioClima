const SearchBar = ({onChange, name}) => {
  return (
    <input
      onChange={onChange}
      name={name}
      type="text"
      className=" rounded-md outline outline-1 shadow-black"
    />
  );
};
export default SearchBar;
