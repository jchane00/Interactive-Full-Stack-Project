const helpers = require('../utils/helpers');

test('format date to return local time', () => {
    const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
    expect(helpers.format_time(date)).toBe(date.toLocaleTimeString());

});

test('should return upper case', () => {
    const name = 'ashwini'
    expect(helpers.format_uppercase(name)).toBe('ASHWINI');

});