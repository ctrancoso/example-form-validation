const validator = require('./index');

test('test => OK', () => {
    const fields = [{
        value: 'email@email.com', // EMAIL
        type: 'email'
    },{
        value: 'Mario' // FIRSTNAME
    },{
        value: 'Rossi' // LASTNAME
    },{
        value: new Date('1970-01-01') // BIRTHDATE
    },{
        value: '00000' // ZIP
    }];
    expect(validator.validateFields(fields)).toBe(true);
});

test('test => KO', () => {
    const fields = [{
        value: 'email', // EMAIL
        type: 'email'
    },{
        value: '' // FIRSTNAME
    },{
        value: 'Rossi' // LASTNAME
    },{
        value: new Date('1970-01-01') // BIRTHDATE
    },{
        value: '0000', // ZIP
        type: 'zipcode'
    }];
    expect(validator.validateFields(fields)).toBe(false);
});