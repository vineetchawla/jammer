const Skill = require("../models/Skill");

const getSkillsByUserId = async (userId) => {
  const skill = await Skill.findOne({ user: userId }).select("instruments");
  return skill;
};

module.exports = getSkillsByUserId;
