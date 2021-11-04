import css from "./List.module.scss";

const ListItem = ({ data, onClick, activeId }) => {
  return (
    <div className={`${css.listItem} ${activeId === data._id ? css.ListItem_active : null}`} onClick={onClick}>
      <div>
        <p className="secondary">{data.title}</p>
        <h4>{data.status}</h4>
      </div>

      {/* <h5>{`${data && data.body.substring(0, 60)} ...`}</h5> */}

      <div>
        <h6>
          submitted by{": "}
          <span className="gray">{data.createdBy}</span>
        </h6>
        <h6>{data.createdAt}</h6>
      </div>
    </div>
  );
};

export default ListItem;
