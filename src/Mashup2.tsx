import "bm-thing-transformer/ui";
import "../ui-static/widgets";

const MashupParameters = defineMashup(
  class {
    myInput!: STRING;
  }
);

export class Mashup2 extends MashupBase {
  renderMashup() {
    return (
      <Mashup ref={MashupParameters}>
        <Label Text={MashupParameters.myInput} />
      </Mashup>
    );
  }
}
