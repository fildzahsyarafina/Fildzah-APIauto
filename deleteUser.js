const assert = require('assert');
const Ajv = require("ajv");
const ajv = new Ajv()

describe('API Delete User', function () {
  it('User should be deleted successfully', async function () {
    const url = 'https://reqres.in/api/users/2'; 

    const response = await fetch(url, {
      method: 'DELETE', 
    });

    console.log("Response Status:", response.status);
    // const validate = ajv.compile(schema);

    //     const valid = validate(data);
    //     if (!valid) {
    //         console.log(validate.errors);
    //     }

    assert.strictEqual(response.status, 204, "Status harus 204 untuk DELETE berhasil"); 
  });
});
