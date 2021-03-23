'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [
      { title: "One-Pan Rotini with Tomato Cream Sauce", createdAt: new Date('2014-09-03'), updatedAt: new Date('2014-09-03') },
      { title: "Peanut Butter and Jelly Sandwich", createdAt: new Date('2014-11-27'), updatedAt: new Date('2014-11-27') },
      { title: "Smoked mackerel & leek hash with horseradish", createdAt: new Date('2016-06-07'), updatedAt: new Date('2016-06-07') },
      { title: "Beetroot, hummus & crispy chickpea sub sandwich", createdAt: new Date('2016-07-08'), updatedAt: new Date('2016-07-08') },
      { title: "Saucy bean baked eggs", createdAt: new Date('2016-09-06'), updatedAt: new Date('2016-09-06') },
      { title: "Butter bean & chorizo stew", createdAt: new Date('2016-12-26'), updatedAt: new Date('2016-12-26') },
      { title: "Green Grape Pie", createdAt: new Date('2016-07-31'), updatedAt: new Date('2016-07-31') },
      { title: "Curried cauliflower & lentil soup", createdAt: new Date('2017-03-22'), updatedAt: new Date('2017-03-22') },
      { title: "Pesto & goat''s cheese risotto", createdAt: new Date('2019-06-01'), updatedAt: new Date('2019-06-01') },
      { title: "Jerk prawn & coconut rice bowls", createdAt: new Date('2019-11-20'), updatedAt: new Date('2019-11-20') },
      { title: "Sausages with pesto mash", createdAt: new Date('2020-01-05'), updatedAt: new Date('2020-01-05') },
      { title: "Easy laksa", createdAt: new Date('2014-08-30'), updatedAt: new Date('2014-08-30') },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
