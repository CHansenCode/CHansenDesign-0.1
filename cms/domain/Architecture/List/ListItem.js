import css from "./List.module.scss";

const ListItem = ({ data, onClick }) => {
  return (
    <div className={css.listItem} onClick={onClick}>
      <h4>{data.title}</h4>
      <h5>{data.subtitle}</h5>
      <h5>{data.body}</h5>
      {/* tags */}
      {data.tags.map((tag, i) => (
        <h4 key={`${tag}${i}`}>{tag}</h4>
      ))}
      <h4>{data.heroUrl}</h4>

      <>
        {data.pages.map((page, i) => (
          <Page key={`${page.title}${i}`} data={page} />
        ))}
      </>

      <>
        {data.media.map((mediaPost, i) => (
          <Gallery key={`${mediaPost.title}${i}`} data={mediaPost} />
        ))}
      </>

      <h5>{data.createdBy}</h5>
      <h5>{data.createdAt}</h5>
    </div>
  );
};

const Page = ({ data }) => {
  return (
    <div>
      <h4>{data.title}</h4>
      <h4>{data.subtitle}</h4>
      <h4>{data.imgUrl}</h4>

      {data.paragraphs.map((paragraph, i) => (
        <h4 key={`archParagraph${i}`}>{paragraph.title}</h4>
      ))}
    </div>
  );
};

const Gallery = ({ data }) => {
  return (
    <div>
      <h4>{data.title}</h4>
      <img src={data.url} />
    </div>
  );
};

export default ListItem;
