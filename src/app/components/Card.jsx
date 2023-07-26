const Card = (props) => {
    return (
      <div className="p-12 space-y-4 rounded-lg bg-white outline outline-1 outline-black   shadow-xl shadow-blue-500 ">
        {props.children}
      </div>
    );
}
export default Card