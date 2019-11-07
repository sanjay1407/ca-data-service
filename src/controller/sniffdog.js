import { Router } from "express";
const request = require("request");
const router = new Router();

const computerScore = ({ specCount, imageCount, wordCount }) => {
  return {
    specScore: specCount / (20 / 100),
    imageScore: imageCount / (10 / 100),
    wordScore: wordCount / (150 / 100)
  };
};

const preparePayload = longKeyword => {
  const payload = {
    query: {
      bool: {
        minimum_should_match: 1,
        should: [
          {
            term: {
              "url.keyword": longKeyword
            }
          },
          {
            term: {
              "children.url.keyword": longKeyword
            }
          }
        ]
      }
    }
  };
  return payload;
};

async function getEasyProduct(postData) {
  const endPoint = "https://www.easy.cl/api//prodeasy*/_search";
  var httpOption = {
    uri: endPoint,
    body: JSON.stringify(postData),
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  };
  return new Promise((ressolve, rej) => {
    request(httpOption, function(err, res) {
      if (!err) {
        ressolve(res.body);
      }
    });
  });
}
async function getEasyUrl(keyword) {
  const endPoint = "http://localhost:3000/snoopdog";
  return new Promise((ressolve, rej) => {
    request(endPoint, function(err, res, body) {
      if (!err) {
        ressolve(body);
      } else {
        rej(err);
      }
    });
  });
}

router.get("/", async (req, res) => {
  const easyUrls = await getEasyUrl("...");
  const urlJson = JSON.parse(easyUrls);
  const longKeyword = urlJson[0].url.slice(urlJson[0].url.lastIndexOf("/") + 1);
  const resData = await getEasyProduct(preparePayload(longKeyword));
  const { hits } = JSON.parse(resData);
  const proddata = hits.hits[0]._source;
  const scoreData = {
    easy: {
      id: proddata.id,
      title: proddata.shortDescription,
      inetPrice: proddata.price_internet,
      ...computerScore({
        specCount: proddata.specs_open.length,
        imageCount: 6,
        wordCount: proddata.longDescription.split(" ").length
      })
    },
    sodimac: {
      id: 123456,
      title: "Prod2",
      inetPrice: 46908,
      ...computerScore({ specCount: 12, imageCount: 4, wordCount: 40 })
    }
  };

  res.send({ data: scoreData });
});

export default router;
