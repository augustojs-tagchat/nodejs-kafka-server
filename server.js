const kafka = require("./kafka");
const producer = kafka.producer();

const main = async () => {
  await producer.connect();
  try {
    const responses = await producer.send({
      topic: "node-if",
      messages: [
        {
          key: "123456",
          value: JSON.stringify({
            type: "function",
            properties: [
              {
                name: "conditions",
                options: [
                  {
                    conditions: [
                      {
                        name: "boolean",
                        type: "boolean",
                        values: [
                          {
                            name: false,
                          },
                          {
                            name: "operation",
                            type: "options",
                            options: [
                              {
                                name: "Equal",
                                value: "equal",
                              },
                            ],
                          },
                          {
                            name: false,
                          },
                        ],
                      },
                      {
                        name: "boolean",
                        type: "string",
                        values: [
                          {
                            name: "valor 0",
                          },
                          {
                            name: "operation",
                            type: "options",
                            options: [
                              {
                                name: "Equal",
                                value: "endsWith",
                              },
                            ],
                          },
                          {
                            name: " 0",
                          },
                        ],
                      },
                      {
                        name: "boolean",
                        type: "number",
                        values: [
                          {
                            name: 5,
                          },
                          {
                            name: "operation",
                            type: "options",
                            options: [
                              {
                                name: "Equal",
                                value: "smallerEqual",
                              },
                            ],
                          },
                          {
                            name: 5,
                          },
                        ],
                      },
                    ],
                    items: [
                      {
                        json: {
                          v1: "banana",
                          v2: "maçã",
                          v3: "uva",
                        },
                      },
                      {
                        json: {
                          v1: "laranja",
                          v2: "pera",
                        },
                      },
                      {
                        json: {
                          v1: "pessego",
                          v2: "goiaba",
                          v3: "kiwi",
                        },
                      },
                      ,
                    ],
                    combineOperation: "any",
                  },
                ],
              },
            ],
          }),
        },
      ],
    });
    console.log("Published message", { responses });
  } catch (error) {
    console.error("Error publishing message", error);
  }
};
main();
