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
    "id": {
      "type": "string"
    },
    "createdAt": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "job",
    "id",
    "createdAt"
  ]
}

describe('API BOOKING',function(){
    it('Create user should be success', async function () {
        this.timeout(2000)
        const url = 'https://reqres.in/api/users'
        const requestData = {
          "name": "fildzah",
          "job": "leader"
      };

        const response = await fetch(url, {
            method: "POST",
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
        assert.strictEqual(response.status,201,"Status harus 201");
        assert.strictEqual(data.name, "fildzah");
    })

})