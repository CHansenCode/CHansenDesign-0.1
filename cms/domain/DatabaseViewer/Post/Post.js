import css from "./Post.module.scss";

const Post = ({ data }) => {
  const testData = {
    title: "Title",
    img: {
      src: "https://media.chansen.design/placeholder.jpg",
    },
  };

  const render = data ? data : testData;

  return (
    <div>
      <img src="https://media.chansen.design/placeholder.jpg" alt="" />
      <h5>{render.title}</h5>
      <h5>{render.title}</h5>
      <h5>{render.title}</h5>
      <h5>{render.title}</h5>
    </div>
  );
};

export default Post;
