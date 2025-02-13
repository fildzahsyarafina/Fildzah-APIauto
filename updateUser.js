const assert = require('assert');
const Ajv = require("ajv");
const ajv = new Ajv()

const schema ={
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "job": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "job",
    "updatedAt"
  ]
}

describe('API BOOKING',function(){
    it('Update user should be success', async function () {
        // this.timeout(3000)
        const url = 'https://reqres.in/api/users/2'
        const requestData = {
          "name": "fildzah",
          "job": "leader QA"
      };

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();
        const validate = ajv.compile(schema);

        const valid = validate(data);
        if (!valid) {
            console.log(validate.errors);
        }

        // console.log("Response : "+ JSON.stringify(data, null,1));
        assert.strictEqual(response.status,200,"Status harus 200");
        assert.strictEqual(data.job, "leader QA");
    })

})