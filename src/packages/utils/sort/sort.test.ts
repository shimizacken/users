import {sortByText} from './sort';

describe('sort test suite', () => {
    const values = [
        {value: 'Leanne Graham'},
        {value: 'Ervin Howell'},
        {value: 'Clementine Bauch'},
        {value: 'Patricia Lebsack'},
        {value: 'Chelsey Dietrich'},
        {value: 'Mrs. Dennis Schulist'},
    ];

    it('should return new neutron', () => {
        const result = sortByText(values);

        expect(result).toMatchSnapshot();
    });
});
