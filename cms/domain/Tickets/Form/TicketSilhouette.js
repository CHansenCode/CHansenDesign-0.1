import css from "./TicketSilhouette.module.scss";

const TicketSilhouette = () => {
  return (
    <div className={css.ticketOutline}>
      <div className={css.noSpan} />

      <div className={css.spanParent}>
        <span className={css.leftSpan} />
        <span className={css.rightSpan} />
      </div>

      <div className={css.noSpan} />

      <div className={css.spanParent}>
        <span className={css.leftSpan} />
        <span className={css.rightSpan} />
      </div>

      <div className={css.noSpan} />
    </div>
  );
};

export default TicketSilhouette;
