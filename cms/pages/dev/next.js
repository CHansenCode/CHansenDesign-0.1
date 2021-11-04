import Section from "../../components/Section/Section";
import InfoOnHover from "../../components/InfoOnHover";
import IFrame from "../../components/Iframe/IFrame";

const next = ({ meta, setMeta }) => {
  return (
    <Section flex center minHeight="100vh">
      <div style={{ height: "100vh", width: "100%", padding: "1rem 1rem 1rem 1rem" }}>
        <div style={{ height: "2rem", marginBottom: "1rem", display: "flex", alignItems: "flex-end" }}>
          <h4 style={{ marginRight: "1rem" }} className="secondary">
            Next version preview
          </h4>
          <InfoOnHover text="This is the view of the next build / version of the website with text-content loaded straight from the database. On build we take a snapshot of the content to a static version for SEO optimization & version handling" />
        </div>
        <IFrame src="https://dev3.chansen.design" height="calc(100% - 3rem)" width="100%" />
      </div>
    </Section>
  );
};

export default next;
