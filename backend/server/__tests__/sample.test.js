import sortBy from "../util";

it("it sorts", () => {
  const input = [
    {
      name: "James",
    },
    {
      name: "Peter",
    },
    {
      name: "John",
    },
    {
      name: "Fred",
    },
  ];
  const output = [
    {
      name: "Fred",
    },
    {
      name: "James",
    },
    {
      name: "John",
    },
    {
      name: "Peter",
    },
  ];
  sortBy(input, "name").then((data) => {
    expect(res).toEqual(output);
  });
});
