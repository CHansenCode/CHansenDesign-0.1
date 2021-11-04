import Textarea from "../../../components/Textarea/Textarea";

const PostComment = ({ onChange }) => {
  return (
    <div>
      <Textarea onChange={onChange} />
    </div>
  );
};

export default PostComment;
