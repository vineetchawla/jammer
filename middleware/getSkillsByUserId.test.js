const getSkillsByUserId = require("./getSkillsByUserId");
const Skill = require("../models/Skill");
const testData = {
  instruments: ["guitar", "piano"],
  user: "5dbff89209dee20b18091ec3",
};

test("return correct userId", async () => {
  // Skill.findOne = jest.fn().mockResolvedValue(testData);
  Skill.findOne = jest.fn().mockImplementation(() => ({
    select: jest.fn().mockResolvedValue(testData),
  }));
  await expect(getSkillsByUserId("5dbff89209dee20b18091ec3")).resolves.toEqual({
    instruments: ["guitar", "piano"],
    user: "5dbff89209dee20b18091ec3",
  });
});
