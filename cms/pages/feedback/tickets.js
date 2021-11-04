import Section from "../../components/Section/Section";
import Tickets from "../../domain/Tickets";

const tickets = ({ meta, setMeta }) => {
  return (
    <Section minHeight="100vh">
      <Tickets />
    </Section>
  );
};

export default tickets;
