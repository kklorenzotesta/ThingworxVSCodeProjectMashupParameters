@ThingDefinition
class MyTestThing extends GenericThing {
  testIdentity({ input }: { input: STRING }): STRING {
    return input;
  }
}
