const Card = (props) => {
    return (
      <div className="p-12 space-y-4 rounded-md bg-white outline outline-1 outline-blue-900 shadow-xl shadow-blue-500 ">
        {props.children}
      </div>
    );
}
export default Card