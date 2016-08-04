import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tree = { 
    "type" : "tree",
    "users-permited" : ["00001","00003","00015"],
    "nodes": [
    {
        "type" : "cat",
        "id" : "00001", 
        "value": "Web Fonts",
        "desc" : "A collection of mostly common used webfonts",
        "items" : [
            {
            "type" : "item",
            "id" : "00011",
            "value" : "Web Fonts Respository : http://www.github/webfonts/", 
            "desc" : "",
            "tags" : ["fonts", "fonts repository"]
            }
        ]
    },
    {
        "type" : "cat",
        "id" : "00002", 
        "value": "Web UI",
        "desc" : "A collection of some good UI designs",
        "cats" : [
            {
                "type" : "cat",
                "id" : "00021", 
                "value": "React UI",
                "desc" : "A collection of mostly common used react UI",
                "items" : [
                    {
                        "type" : "item",
                        "id" : "00111",
                        "value" : "React UI : http://www.material-ui.com/#/components/app-bar/", 
                        "desc" : "",
                        "tags" : ["reactjs", "react ui"]
                    }
                ]
            }
        ]       
    }
]
};



class TreeApi {
  static getTree() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, tree));
      }, delay);
    });
  }
}

export default TreeApi;
