import Section from "../components/Section/Section";
import PlanningApp from "../domain/PlanningApp";

const planning = ({ meta, setMeta }) => {
  return (
    <Section flex column minHeight="100vh">
      <PlanningApp />
    </Section>
  );
};

export default planning;
