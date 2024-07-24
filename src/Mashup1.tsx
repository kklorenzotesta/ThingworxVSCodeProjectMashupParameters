import "bm-thing-transformer/ui";
import "../ui-static/widgets";

const goToMashup2 = defineWidget<"Mashup2">(Navigation);
const goToMashup2Function = defineWidget<"Mashup2">(Navigationfunction);
const MashupParameters = defineMashup(
  class {
    myInput!: STRING;
  }
);

export class Mashup1 extends MashupBase {
  renderMashup() {
    return (
      <Mashup ref={MashupParameters}>
        <Button
          Clicked={[goToMashup2.Navigate]}
          Label="Navigation"
        />
        <Button
          Clicked={[goToMashup2Function.Navigate]}
          Label="Navigationfunction"
        />
        <Label Text={MashupParameters.myInput} />
        <Navigation
          MashupName="Mashup2"
          TargetWindow="replace"
          ref={goToMashup2}
          Visible={false}
          myInput={MashupParameters.myInput}
        />
        <Navigationfunction
          TargetMashup="Mashup2"
          TargetWindowType="replace"
          ref={goToMashup2Function}
          myInput={MashupParameters.myInput}
        />
      </Mashup>
    );
  }
}
