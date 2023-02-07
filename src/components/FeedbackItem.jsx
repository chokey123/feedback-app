import { FaTimes } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item, handleDelete }) {
  const { editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <AiFillEdit color="green" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
export default FeedbackItem;
