define({ "api": [
  {
    "type": "post",
    "url": "/api/match/create",
    "title": "CreateMatch",
    "description": "<p>CreateMatch</p>",
    "version": "0.0.1",
    "name": "CreateMatch",
    "group": "Match",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/match/create",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"hometeamId\":\"592ac0636f64472b6c39872d\",\n    \"awayteamId\":\"592b96a13c1d02210048345a\",\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"datetime\":\"04/06/2017\",\n    \"type\": \"test\",\n    \"status\":\"\",\n    \"result\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "hometeamId",
            "description": "<p>hometeamId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "awayteamId",
            "description": "<p>awayteamId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>pitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>result</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "hometeamId",
            "description": "<p>hometeamId</p>"
          },
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "awayteamId",
            "description": "<p>awayteamId</p>"
          },
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>pitchId</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 CREATE_SUCCESS\n            {\n                \"message\": \"CREATE_MATCH_SUCCESS\",\n                \"match\": {\n                    \"__v\": 0,\n                    \"hometeamId\": \"592ac0636f64472b6c39872d\",\n                    \"awayteamId\": \"592b96a13c1d02210048345a\",\n                    \"pitchId\": \"592e42fc88eddb38c87c864c\",\n                    \"datetime\": \"04/06/2017\",\n                    \"type\": \"test\",\n                    \"status\": \"On\",\n                    \"result\": \"None\",\n                    \"_id\": \"5930d73219b79c1b54e9b1d6\"\n                }\n            }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"MATCH_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/match.routes.js",
    "groupTitle": "Match"
  },
  {
    "type": "delete",
    "url": "/api/match/delete",
    "title": "DeleteMatch",
    "description": "<p>DeleteMatch</p>",
    "version": "0.0.1",
    "name": "DeleteMatch",
    "group": "Match",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/match/delete",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"matchId\":\"592ac0636f64472b6c39872d\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "matchId",
            "description": "<p>matchId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 DELETE_SUCCESS\n            {\n                \"message\": \"DELETE_MATCH_SUCCESS\"\"\n            }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/match.routes.js",
    "groupTitle": "Match"
  },
  {
    "type": "get",
    "url": "/api/match/get",
    "title": "GetMatch",
    "description": "<p>GetMatch</p>",
    "version": "0.0.1",
    "name": "GetMatch",
    "group": "Match",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/match/get",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"matchId\":\"592ac0636f64472b6c39872d\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Query": [
          {
            "group": "Request Query",
            "type": "ObjectId",
            "optional": false,
            "field": "matchId",
            "description": "<p>matchId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "hometeamId",
            "description": "<p>hometeamId</p>"
          },
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "awayteamId",
            "description": "<p>awayteamId</p>"
          },
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>pitchId</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 GET_SUCCESS\n            {\n                \"message\": \"GET_MATCH_SUCCESS\",\n                \"match\": {\n                    \"__v\": 0,\n                    \"hometeamId\": \"592ac0636f64472b6c39872d\",\n                    \"awayteamId\": \"592b96a13c1d02210048345a\",\n                    \"pitchId\": \"592e42fc88eddb38c87c864c\",\n                    \"datetime\": \"04/06/2017\",\n                    \"type\": \"test\",\n                    \"status\": \"On\",\n                    \"result\": \"None\",\n                    \"_id\": \"5930d73219b79c1b54e9b1d6\"\n                }\n            }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/match.routes.js",
    "groupTitle": "Match"
  },
  {
    "type": "put",
    "url": "/api/match/update",
    "title": "UpdateMatch",
    "description": "<p>UpdateMatch</p>",
    "version": "0.0.1",
    "name": "UpdateMatch",
    "group": "Match",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/match/update",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"matchId\": \"5930d73219b79c1b54e9b1d6\",\n    \"hometeamId\":\"592ac0636f64472b6c39872d\",\n    \"awayteamId\":\"592b96a13c1d02210048345a\",\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"datetime\":\"04/06/2017\",\n    \"type\": \"test\",\n    \"status\":\"\",\n    \"result\":\"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "matchId",
            "description": "<p>matchId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "hometeamId",
            "description": "<p>hometeamId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "awayteamId",
            "description": "<p>awayteamId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>pitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "datetime",
            "description": "<p>datetime</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>result</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 UPDATE_SUCCESS\n            {\n                \"message\": \"UPDATE_MATCH_SUCCESS\"\n            }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"MATCH_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/match.routes.js",
    "groupTitle": "Match"
  },
  {
    "type": "post",
    "url": "/api/team/addFeedback",
    "title": "AddFeedBack",
    "description": "<p>AddFeedBack</p>",
    "version": "0.0.1",
    "name": "AddFeedBack",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/addFeedback",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"userId\":\"5923e38a6171b55d72f57f62\",\n    \"vote\":\"5\",\n    \"comment\":\"CMT1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>PitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "vote",
            "description": "<p>Vote</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ADD_SUCCESS\n {\n    \"message\": \"CREATE_PITCH_SUCCESS\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"PITCH_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"DUPLICATE_FEEDBACK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "post",
    "url": "/api/pitch/addPrice",
    "title": "AddPrice",
    "description": "<p>AddPrice</p>",
    "version": "0.0.1",
    "name": "AddPrice",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/addPrice",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"time\":\"6:30 - 8:30\",\n    \"price\":\"200000\",\n    \"promotion\":\"water free\",\n    \"status\":\"none\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>PitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "promotion",
            "description": "<p>Promotion</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ADD_SUCCESS\n        {\n            \"message\": \"ADD_PRICE_SUCCESS\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"DUPLICATE_PRICE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "post",
    "url": "/api/pitch/create",
    "title": "CreatePitch",
    "description": "<p>CreatePitch</p>",
    "version": "0.0.1",
    "name": "CreatePitch",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/create",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"name\":\"Dai Chau 2\",\n    \"image\":\"daichau.jpg\",\n    \"address\":\"109 Man Thien\",\n    \"hotline\":\"0911000222\",\n    \"quanlity\":\"7\",\n    \"description\":\"BLA BLA BLA BLA\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adress</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "hotline",
            "description": "<p>Hotline</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "quanlity",
            "description": "<p>quanlity</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "hotline",
            "description": "<p>Hotline</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "quanlity",
            "description": "<p>Quanlity</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 CREATE_SUCCESS\n        {\n            \"message\": \"CREATE_PITCH_SUCCESS\",\n            \"pitch\": {\n                \"__v\": 0,\n                \"name\": \"Dai Chau 2\",\n                \"image\": \"daichau.jpg\",\n                \"address\": \"109 Man Thien\",\n                \"hotline\": \"0911000222\",\n                \"quanlity\": 7,\n                \"description\": \"BLA BLA BLA BL\",\n                \"_id\": \"592fb77e4d7b803ff4c0c894\",\n                \"feedback\": [],\n                \"priceList\": []\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"DUPLICATE_PITCH\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "delete",
    "url": "/api/pitch/delete",
    "title": "DeletePitch",
    "description": "<p>DeletePitch</p>",
    "version": "0.0.1",
    "name": "DeletePitch",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/delete",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592cdf16ec4308468cbc6c87\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>PitchId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 DELETE_SUCCESS\n        {\n            \"message\": \"DELETE_PITCH_SUCCESS\",\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "get",
    "url": "/api/pit/get",
    "title": "GetPitch",
    "description": "<p>GetPitch</p>",
    "version": "0.0.1",
    "name": "GetPitch",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/get",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    pitchId: 592fb77e4d7b803ff4c0c894\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Query": [
          {
            "group": "Request Query",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>PitchId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "hotline",
            "description": "<p>Hotline</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "quanlity",
            "description": "<p>Quanlity</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 GET_SUCCESS\n        {\n            \"message\": \"GET_PITCH_SUCCESS\",\n            \"pitch\": {\n                \"__v\": 0,\n                \"name\": \"Dai Chau 2\",\n                \"image\": \"daichau.jpg\",\n                \"address\": \"109 Man Thien\",\n                \"hotline\": \"0911000222\",\n                \"quanlity\": 7,\n                \"description\": \"BLA BLA BLA BL\",\n                \"_id\": \"592fb77e4d7b803ff4c0c894\",\n                \"feedback\": [],\n                \"priceList\": []\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "delete",
    "url": "/api/pitch/removeFeedback",
    "title": "RemoveFeedback",
    "description": "<p>RemoveFeedback</p>",
    "version": "0.0.1",
    "name": "RemoveFeedback",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/removeFeedback",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"userId\":\"5923e31710ca9121b49f31a8\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "oitchId",
            "description": "<p>PitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "vote",
            "description": "<p>Vote</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 REMOVE_SUCCESS\n {\n    \"message\": \"REMOVE_FEEDBACK_SUCCESS\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"PITCH_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "delete",
    "url": "/api/team/removePrice",
    "title": "RemovePrice",
    "description": "<p>RemovePrice</p>",
    "version": "0.0.1",
    "name": "RemovePrice",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/removePrice",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"time\":\"5:30 - 6:30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>PitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 REMOVE_SUCCESS\n        {\n            \"message\": \"REMOVE_PRICE_SUCCESS\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "put",
    "url": "/api/pitch/updateFeedback",
    "title": "UpdateFeedback",
    "description": "<p>UpdateFeedback</p>",
    "version": "0.0.1",
    "name": "UpdateFeedback",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/updateFeedback",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592e42fc88eddb38c87c864c\",\n    \"userId\":\"5923e31710ca9121b49f31a8\",\n    \"vote\":\"5\",\n    \"comment\":\"CMT111\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "oitchId",
            "description": "<p>PitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "vote",
            "description": "<p>Vote</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 UPDATE_SUCCESS\n {\n     \"message\": \"UPDATE_FEEDBACK_SUCCESS\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"PITCH_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "put",
    "url": "/api/pitch/update",
    "title": "UpdatePitch",
    "description": "<p>UpdatePitch</p>",
    "version": "0.0.1",
    "name": "UpdatePitch",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/update",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592fb77e4d7b803ff4c0c894\"\n    \"name\":\"Dai Chau 2\",\n    \"image\":\"daichau.jpg\",\n    \"address\":\"109 Man Thien\",\n    \"hotline\":\"0911000222\",\n    \"quanlity\":\"7\",\n    \"description\":\"BLA BLA BLA BLA\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Adress</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "hotline",
            "description": "<p>Hotline</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "quanlity",
            "description": "<p>quanlity</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "hotline",
            "description": "<p>Hotline</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "quanlity",
            "description": "<p>Quanlity</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 UPDATE_SUCCESS\n        {\n            \"message\": \"UPDATE_PITCH_SUCCESS\",\n            \"pitch\": {\n                \"__v\": 0,\n                \"name\": \"Dai Chau 2\",\n                \"image\": \"daichau.jpg\",\n                \"address\": \"109 Man Thien\",\n                \"hotline\": \"0911000222\",\n                \"quanlity\": 7,\n                \"description\": \"BLA BLA BLA BL\",\n                \"_id\": \"592fb77e4d7b803ff4c0c894\",\n                \"feedback\": [],\n                \"priceList\": []\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": "{\n    \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": "{\n    \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"DUPLICATE_PITCH\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "put",
    "url": "/api/team/updatePrice",
    "title": "UpdatePrice",
    "description": "<p>UpdatePrice</p>",
    "version": "0.0.1",
    "name": "UpdatePrice",
    "group": "Pitch",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/pitch/updatePrice",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"pitchId\":\"592cdf16ec4308468cbc6c87\",\n    \"time\":\"5:30 - 6:30\",\n    \"timeUpdate\":\"4:30 - 6:30\",\n    \"priceUpdate\":\"600000\",\n    \"promotionUpdate\":\"water free\",\n    \"statusUpdate\":\"none123\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "ObjectId",
            "optional": false,
            "field": "pitchId",
            "description": "<p>PitchId</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "timeUpdate",
            "description": "<p>TimeUpdate</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "priceUpdate",
            "description": "<p>PriceUpdate</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "promotionUpdate",
            "description": "<p>PromotionUpdate</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "statusUpdate",
            "description": "<p>StatusUpdate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 UPDATE_PRICE_SUCCESS\n        {\n            \"message\": \"UPDATE_PRICE_UPDATE\",\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": "{\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": "{\n     \"message\": \"DUPLICATE_PRICE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/pitch.routes.js",
    "groupTitle": "Pitch"
  },
  {
    "type": "post",
    "url": "/api/team/add",
    "title": "AddMemberTeam",
    "description": "<p>AddMemberTeam</p>",
    "version": "0.0.1",
    "name": "AddMemberTeam",
    "group": "Team",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/team/add",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"teamId\":\"592b8f366c62f51c5078a8a0\",\n    \"userId\":\"5923e38a6171b55d72f57f62\",\n    \"role\":\"player\",\n    \"position\":\"GK\",\n    \"playerNumber\":\"0\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Param": [
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "teamId",
            "description": "<p>teamId</p>"
          },
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>userId</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>Position</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "playerNumber",
            "description": "<p>PlayerNumber</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ADD_SUCCESS\n     {\n        \"message\": \"ADD_MEMBER_SUCCESS\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND_TEAM\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/team.routes.js",
    "groupTitle": "Team"
  },
  {
    "type": "post",
    "url": "/api/team/create",
    "title": "CreateTeam",
    "description": "<p>CreateTeam</p>",
    "version": "0.0.1",
    "name": "CreateTeam",
    "group": "Team",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/team/create",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n \"name\":\"FC CN4\",\n \"date\":\"01/01/2013\",\n \"logo\":\"logo.jpg\",\n \"colours\":\"red\",\n \"gallary\":\"champion cup 2013\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "colours",
            "description": "<p>Colours</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "gallary",
            "description": "<p>Gallary</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>logo</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "colours",
            "description": "<p>colours</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "gallary",
            "description": "<p>gallary</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 CREATE_SUCCESS\n  {\n      \"message\": \"CREATE_SUCCESS\",\n      \"team\": {\n          \"__v\": 0,\n          \"name\": \"FC CN2\",\n          \"date\": \"01/01/2013\",\n          \"logo\": \"logo.jpg\",\n          \"colours\": \"red\",\n          \"gallary\": \"champion cup 2013\",\n          \"_id\": \"592b96a13c1d02210048345a\",\n          \"members\": []\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"DUPPLICATE_TEAM\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/team.routes.js",
    "groupTitle": "Team"
  },
  {
    "type": "delete",
    "url": "/api/team/delete",
    "title": "DeleteTeam",
    "description": "<p>DeleteTeam</p>",
    "version": "0.0.1",
    "name": "DeleteTeam",
    "group": "Team",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/team/delete",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "        {\n\t        \"teamId\":\"59268e6bdf615c196092f0db\"\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Request Param": [
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "teamId",
            "description": "<p>teamId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 UPDATE_SUCESS\n     {\n        \"message\": \"REMOVE_TEAM_SUCCESS\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND_TEAM\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/team.routes.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team/get",
    "title": "GetTeam",
    "description": "<p>GetTeam</p>",
    "version": "0.0.1",
    "name": "GetTeam",
    "group": "Team",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/team/get",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n   teamId:\"592ac0636f64472b6c39872d\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Param": [
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "teamId",
            "description": "<p>teamId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>logo</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "colours",
            "description": "<p>colours</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "gallary",
            "description": "<p>gallary</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 GET_TEAM_SUCCESS\n        {\n        \"message\": \"GET_TEAM_SUCCESS\",\n        \"team\": {\n            \"_id\": \"592ac0636f64472b6c39872d\",\n            \"name\": \"FC CN3\",\n            \"date\": \"01/01/2013\",\n            \"logo\": \"logo.jpg\",\n            \"colours\": \"red\",\n            \"gallary\": \"champion cup 2013\",\n            \"__v\": 0,\n            \"members\": [\n            {\n                \"_id\": \"592ac0a86f64472b6c39872f\",\n                \"playerNumber\": 0,\n                \"position\": \"GK\",\n                \"role\": \"player\",\n                \"userId\": \"5923e38a6171b55d72f57f62\"\n            }\n            ]\n        }\n        }}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND_TEAM\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/team.routes.js",
    "groupTitle": "Team"
  },
  {
    "type": "delete",
    "url": "/api/team/remove",
    "title": "RemoveMemberTeam",
    "description": "<p>RemoveMemberTeam</p>",
    "version": "0.0.1",
    "name": "RemoveMemberTeam",
    "group": "Team",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/team/remove",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"teamId\":\"592b8f366c62f51c5078a8a0\",\n    \"userId\":\"5923e38a6171b55d72f57f62\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Param": [
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "teamId",
            "description": "<p>teamId</p>"
          },
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "userId",
            "description": "<p>userId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 REMOVE_SUCCESS\n        {\n           \"message\": \"REMOVE_MEMBER_SUCCESS\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": "{\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": "{\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/team.routes.js",
    "groupTitle": "Team"
  },
  {
    "type": "put",
    "url": "/api/team/update",
    "title": "UpdateTeam",
    "description": "<p>UpdateTeam</p>",
    "version": "0.0.1",
    "name": "UpdateTeam",
    "group": "Team",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/team/update",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n    \"teamId\":\"592ac0636f64472b6c39872d\",\n    \"name\":\"FC CN3\",\n    \"date\":\"01/01/2013\",\n    \"logo\":\"logo.jpg\",\n    \"colours\":\"red\",\n    \"gallary\":\"champion cup 2013\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Param": [
          {
            "group": "Request Param",
            "type": "ObjectId",
            "optional": false,
            "field": "teamId",
            "description": "<p>teamId</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "colours",
            "description": "<p>Colours</p>"
          },
          {
            "group": "Request Param",
            "type": "String",
            "optional": false,
            "field": "gallary",
            "description": "<p>Gallary</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Team id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>logo</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "colours",
            "description": "<p>colours</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "gallary",
            "description": "<p>gallary</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 UPDATE_SUCCESS\n        {\n            \"message\": \"UPDATE_TEAM_SUCCESS\",\n            \"team\": {\n                    \"_id\": \"592ac0636f64472b6c39872d\",\n                    \"name\": \"FC CN3\",\n                    \"date\": \"01/01/2013\",\n                    \"logo\": \"logo.jpg\",\n                    \"colours\": \"red\",\n                    \"gallary\": \"champion cup 2013\",\n                    \"__v\": 0,\n                    \"members\": [\n                    {\n                        \"_id\": \"592ac0a86f64472b6c39872f\",\n                        \"playerNumber\": 0,\n                        \"position\": \"GK\",\n                        \"role\": \"player\",\n                        \"userId\": \"5923e38a6171b55d72f57f62\"\n                    }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"NOT_FOUND_TEAM\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/team.routes.js",
    "groupTitle": "Team"
  },
  {
    "type": "post",
    "url": "/api/auth",
    "title": "SignIn",
    "description": "<p>SignIn</p>",
    "version": "0.0.1",
    "name": "SignIn",
    "group": "User",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/auth/signin",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n  \"email\": \"huycongxe@gmail.com\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Salt</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Created date</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "description": "<p>Deleted status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 LOGIN_SUCESS\n{\n   \"data\": {\n       \"__v\": 0,\n       \"role\": \"user\",\n       \"password\": \"4d87f2e14843b5300e0a16f44cd7cf30\",\n       \"salt\": \"a0ea96eb5e26f24c\",\n       \"email\": \"huycongxe@.com\",\n       \"firstName\": \"Dang Nhat\",\n       \"lastName\": \"Huy\",\n       \"status\": \"active\",\n       \"_id\": \"5902c7a6ae683517f8df2466\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"PASSWORD_INCORRECT\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/auth.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth",
    "title": "SignUp",
    "description": "<p>SignUp</p>",
    "version": "0.0.1",
    "name": "SignUp",
    "group": "User",
    "permission": [
      {
        "name": "User"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/auth/signup",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Params-Example",
          "content": "{\n  \"email\": \"huycongxe@gmail.com\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Salt</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Created date</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "description": "<p>Deleted status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 REGISTER_SUCCESS\n{\n   \"data\": {\n       \"__v\": 0,\n       \"role\": \"user\",\n       \"password\": \"4d87f2e14843b5300e0a16f44cd7cf30\",\n       \"salt\": \"a0ea96eb5e26f24c\",\n       \"email\": \"huycongxe@.com\",\n       \"_id\": \"5902c7a6ae683517f8df2466\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 403": [
          {
            "group": "Response Body 403",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 500": [
          {
            "group": "Response Body 500",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-403-Response:",
          "content": " {\n     \"message\": \"ERROR_INPUT\"\n}",
          "type": "json"
        },
        {
          "title": "Error-500-Response:",
          "content": " {\n     \"message\": \"SYSTEM_ERROR\"\n}",
          "type": "json"
        },
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"message\": \"DUPLICATE_USER\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/server/routes/auth.routes.js",
    "groupTitle": "User"
  }
] });
