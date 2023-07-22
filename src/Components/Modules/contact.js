import data from "../Json/contact.json";
import Components from "../SubComponents/Contact/Components";

export default function ContactModule() {
  return (
    <div className="flex flex-wrap justify-center mt-auto flex flex-wrap">
      {data.contactData.map((block) => Components(block))}
    </div>
  );
}