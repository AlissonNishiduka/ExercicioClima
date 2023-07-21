const Card = (props) => {
    return (
        <div className="p-12 rounded-md bg-gray-400 ">
            {props.children}
      </div>
    );
}
export default Card