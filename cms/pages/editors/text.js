import Section from "../../components/Section/Section";
import TextEditor from "../../domain/TextEditor";

const text = ({ meta, setMeta }) => {
  return (
    <Section center minHeight="100vh">
      <TextEditor />
    </Section>
  );
};

export default text;
