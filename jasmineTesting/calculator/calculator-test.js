
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 33333,
    years: 4,
    rate: 2.8};
  expect(calculateMonthlyPayment(values)).toEqual("734.86")
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual("131.00")
});

it("should handle multiple decimals", function() {
  const values = {
    amount: 10043.34,
    years: 8.66,
    rate: 5.38};
  expect(calculateMonthlyPayment(values)).toEqual("121.96")
});


/// etc
