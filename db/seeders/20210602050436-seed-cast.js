"use strict";
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const casts = [
      "budi",
      "sarah",
      "jo in sung",
      "anne hatheway",
      "ryan gosling",
      "emma watson",
      "emma stone",
      "harry potter",
      "robert pattinson",
      "inggit garnasih",
      "camelia",
      "thomas edison",
      "ariana grande",
      "lady antebellum",
      "indah permata sari",
    ];
    const seed = casts.map((cast) => {
      return {
        name: cast,
        description: null,
        birth_date: randomDate(new Date(2012, 0, 1), new Date()),
        died_date: null,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("casts", seed, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("casts", null, {});
  },
};
