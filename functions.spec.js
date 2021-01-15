const functions = require('./functions')

// it ou test

it (`Somando dois valores`, () => {
  expect(functions.soma(2, 2)).toBe(4)
})

it (`Should be Null`, () => {
  expect(functions.isNull()).toBeNull()
})

it (`Should be Falsy`, () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

it (`Should be João Rafael`, () => {
  expect(functions.createUser()).toEqual({
    firstName: "João",
    lastName: "Rafael"
  })
})

it (`Should be under 1600`, () => {
  const val1 = 700;
  const val2 = 800;
  expect(val1 + val2).toBeLessThanOrEqual(1600) // menor ou igual a 1600
})

it (`Using regex to match expression`, () => {
  expect("Developer").not.toMatch(/JS/i)
})

it (`Admin should be in usernames`, () => {
  const usernames = ["glaucio", "rafael", "ronaldo", "joão"]
  expect(usernames).toContain("rafael")
})

it (`User fetched name should be Glenna Reichert`, () => {
  expect.assertions(1);

  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual("Glenna Reichert")
    })
})

// Mesmo teste de cima, agora usando async e await

it(`User fetched name should be Glenna Reichert`, async () => {
  expect.assertions(1);

  const data = await functions.fetchUser()
  expect(data.name).toEqual("Glenna Reichert");
});
