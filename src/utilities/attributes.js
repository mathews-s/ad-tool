/**
 * Function to construct the site name adhering to our convention
 * @param {*} property String site name
 */
export const buildSiteName = (property) => {
    switch(property) {
        case 'CNA Lifestyle':
            return 'cnalif';
        case 'CNA Luxury':
            return 'cnalux';
        default:
            return property.replace(/ /g,'').toLowerCase();
    }
}