import { useSelector, useDispatch } from "react-redux";

import Button from "../../../components/Button/Button";

import { deleteText } from "../../../actions/text.actions";

const PageInfo = ({ activeId }) => {
  const dispatch = useDispatch();

  const activePage = useSelector((state) => (activeId ? state.texts.find((text) => text._id === activeId) : null));

  return activePage ? (
    <div>
      <h4>{activePage.pageTitle}</h4>
      <Button text="delete page" className="error" onClick={() => dispatch(deleteText(activeId))} />
    </div>
  ) : null;
};

export default PageInfo;
