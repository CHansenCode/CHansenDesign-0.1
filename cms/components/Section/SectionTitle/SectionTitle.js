import css from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return (
    <div className={css.container}>
      <span></span>
      <h4>{title}</h4>
    </div>
  );
};

export default SectionTitle;
