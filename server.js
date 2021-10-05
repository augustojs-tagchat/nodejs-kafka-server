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
                  },
                  // {
                  //   name: "dateTime",
                  //   displayName: "Date & Time",
                  //   values: [
                  //     {
                  //       displayName: "Value 1",
                  //       name: "value1",
                  //       type: "dateTime",
                  //       default: "",
                  //       description:
                  //         "The value to compare with the second one.",
                  //     },
                  //     {
                  //       displayName: "Operation",
                  //       name: "operation",
                  //       type: "options",
                  //       options: [
                  //         {
                  //           name: "Occurred after",
                  //           value: "after",
                  //         },
                  //         {
                  //           name: "Occurred before",
                  //           value: "before",
                  //         },
                  //       ],
                  //       default: "after",
                  //       description:
                  //         "Operation to decide where the the data should be mapped to.",
                  //     },
                  //     {
                  //       displayName: "Value 2",
                  //       name: "value2",
                  //       type: "dateTime",
                  //       default: "",
                  //       description: "The value to compare with the first one.",
                  //     },
                  //   ],
                  // },
                  // {
                  //   name: "number",
                  //   displayName: "Number",
                  //   values: [
                  //     {
                  //       displayName: "Value 1",
                  //       name: "value1",
                  //       type: "number",
                  //       default: 0,
                  //       description:
                  //         "The value to compare with the second one.",
                  //     },
                  //     {
                  //       displayName: "Operation",
                  //       name: "operation",
                  //       type: "options",
                  //       options: [
                  //         {
                  //           name: "Smaller",
                  //           value: "smaller",
                  //         },
                  //         {
                  //           name: "Smaller Equal",
                  //           value: "smallerEqual",
                  //         },
                  //         {
                  //           name: "Equal",
                  //           value: "equal",
                  //         },
                  //         {
                  //           name: "Not Equal",
                  //           value: "notEqual",
                  //         },
                  //         {
                  //           name: "Larger",
                  //           value: "larger",
                  //         },
                  //         {
                  //           name: "Larger Equal",
                  //           value: "largerEqual",
                  //         },
                  //         {
                  //           name: "Is Empty",
                  //           value: "isEmpty",
                  //         },
                  //       ],
                  //       default: "smaller",
                  //       description:
                  //         "Operation to decide where the the data should be mapped to.",
                  //     },
                  //     {
                  //       displayName: "Value 2",
                  //       name: "value2",
                  //       type: "number",
                  //       displayOptions: {
                  //         hide: {
                  //           operation: ["isEmpty"],
                  //         },
                  //       },
                  //       default: 0,
                  //       description: "The value to compare with the first one.",
                  //     },
                  //   ],
                  // },
                  // {
                  //   name: "string",
                  //   displayName: "String",
                  //   values: [
                  //     {
                  //       displayName: "Value 1",
                  //       name: "value1",
                  //       type: "string",
                  //       default: "",
                  //       description:
                  //         "The value to compare with the second one.",
                  //     },
                  //     {
                  //       displayName: "Operation",
                  //       name: "operation",
                  //       type: "options",
                  //       options: [
                  //         {
                  //           name: "Contains",
                  //           value: "contains",
                  //         },
                  //         {
                  //           name: "Ends With",
                  //           value: "endsWith",
                  //         },
                  //         {
                  //           name: "Equal",
                  //           value: "equal",
                  //         },
                  //         {
                  //           name: "Not Contains",
                  //           value: "notContains",
                  //         },
                  //         {
                  //           name: "Not Equal",
                  //           value: "notEqual",
                  //         },
                  //         {
                  //           name: "Regex",
                  //           value: "regex",
                  //         },
                  //         {
                  //           name: "Starts With",
                  //           value: "startsWith",
                  //         },
                  //         {
                  //           name: "Is Empty",
                  //           value: "isEmpty",
                  //         },
                  //       ],
                  //       default: "equal",
                  //       description:
                  //         "Operation to decide where the the data should be mapped to.",
                  //     },
                  //     {
                  //       displayName: "Value 2",
                  //       name: "value2",
                  //       type: "string",
                  //       displayOptions: {
                  //         hide: {
                  //           operation: ["isEmpty", "regex"],
                  //         },
                  //       },
                  //       default: "",
                  //       description: "The value to compare with the first one.",
                  //     },
                  //     {
                  //       displayName: "Regex",
                  //       name: "value2",
                  //       type: "string",
                  //       displayOptions: {
                  //         show: {
                  //           operation: ["regex"],
                  //         },
                  //       },
                  //       default: "",
                  //       placeholder: "/text/i",
                  //       description: "The regex which has to match.",
                  //     },
                  //   ],
                  // },
                ],
              },
              // {
              //   displayName: "Combine",
              //   name: "combineOperation",
              //   type: "options",
              //   options: [
              //     {
              //       name: "ALL",
              //       description:
              //         'Only if all conditions are meet it goes into "true" branch.',
              //       value: "all",
              //     },
              //     {
              //       name: "ANY",
              //       description:
              //         'If any of the conditions is meet it goes into "true" branch.',
              //       value: "any",
              //     },
              //   ],
              //   default: "all",
              //   description:
              //     "If multiple rules got set this settings decides if it is true as soon as ANY condition matches or only if ALL get meet.",
              // },
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
