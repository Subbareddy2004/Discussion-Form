"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/questions";
exports.ids = ["pages/api/questions"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\nasync function connectToDatabase() {\n    const client = await clientPromise;\n    const db = client.db(process.env.MONGODB_DB);\n    return {\n        client,\n        db\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUc7SUFDZEMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsZUFBZSxFQUFFLElBQUk7Q0FDdEI7QUFFRCxJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsSUFBSVIsSUFBc0MsRUFBRTtJQUMxQyxJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUU7UUFDL0JKLE1BQU0sR0FBRyxJQUFJUixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDTSxNQUFNLENBQUNDLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLE9BQU8sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDREosYUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFHTjtBQUVNLGVBQWVFLGlCQUFpQixHQUFHO0lBQ3hDLE1BQU1OLE1BQU0sR0FBRyxNQUFNQyxhQUFhO0lBQ2xDLE1BQU1NLEVBQUUsR0FBR1AsTUFBTSxDQUFDTyxFQUFFLENBQUNiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxVQUFVLENBQUM7SUFDNUMsT0FBTztRQUFFUixNQUFNO1FBQUVPLEVBQUU7S0FBRSxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3J1bS8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbn07XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihwcm9jZXNzLmVudi5NT05HT0RCX0RCKTtcclxuICByZXR1cm4geyBjbGllbnQsIGRiIH07XHJcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiLCJjb25uZWN0VG9EYXRhYmFzZSIsImRiIiwiTU9OR09EQl9EQiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/questions.js":
/*!********************************!*\
  !*** ./pages/api/questions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    const { method  } = req;\n    const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    switch(method){\n        case \"GET\":\n            try {\n                const questions = await db.collection(\"questions\").find().sort({\n                    createdAt: -1\n                }).toArray();\n                res.status(200).json(questions);\n            } catch (error) {\n                res.status(500).json({\n                    error: \"Error fetching questions\"\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const { name , email , question  } = req.body;\n                const newQuestion = {\n                    name,\n                    email,\n                    question,\n                    createdAt: new Date(),\n                    replies: []\n                };\n                await db.collection(\"questions\").insertOne(newQuestion);\n                res.status(201).json({\n                    message: \"Question added successfully\"\n                });\n            } catch (error1) {\n                res.status(500).json({\n                    error: \"Error adding question\"\n                });\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"POST\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlc3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBRXZDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0YsR0FBRztJQUN0QixNQUFNLEVBQUVHLEVBQUUsR0FBRSxHQUFHLE1BQU1MLCtEQUFpQixFQUFFO0lBRXhDLE9BQVFJLE1BQU07UUFDWixLQUFLLEtBQUs7WUFDUixJQUFJO2dCQUNGLE1BQU1FLFNBQVMsR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFBRSxDQUFDLENBQUNDLE9BQU8sRUFBRTtnQkFDM0ZSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNQLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsT0FBT1EsS0FBSyxFQUFFO2dCQUNkWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsMEJBQTBCO2lCQUFFLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQ0QsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdmLEdBQUcsQ0FBQ2dCLElBQUk7Z0JBQzFDLE1BQU1DLFdBQVcsR0FBRztvQkFBRUosSUFBSTtvQkFBRUMsS0FBSztvQkFBRUMsUUFBUTtvQkFBRVAsU0FBUyxFQUFFLElBQUlVLElBQUksRUFBRTtvQkFBRUMsT0FBTyxFQUFFLEVBQUU7aUJBQUU7Z0JBQ2pGLE1BQU1oQixFQUFFLENBQUNFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQ2UsU0FBUyxDQUFDSCxXQUFXLENBQUMsQ0FBQztnQkFDeERoQixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFVSxPQUFPLEVBQUUsNkJBQTZCO2lCQUFFLENBQUMsQ0FBQztZQUNuRSxFQUFFLE9BQU9ULE1BQUssRUFBRTtnQkFDZFgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFLHVCQUF1QjtpQkFBRSxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUNELE1BQU07UUFDUjtZQUNFWCxHQUFHLENBQUNxQixTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUFDLEtBQUs7Z0JBQUUsTUFBTTthQUFDLENBQUMsQ0FBQztZQUN4Q3JCLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDYSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVyQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUN2RDtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3J1bS8uL3BhZ2VzL2FwaS9xdWVzdGlvbnMuanM/MDg5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uL2xpYi9tb25nb2RiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4gIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICBjYXNlICdHRVQnOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3F1ZXN0aW9ucycpLmZpbmQoKS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KS50b0FycmF5KCk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocXVlc3Rpb25zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgZmV0Y2hpbmcgcXVlc3Rpb25zJyB9KTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHF1ZXN0aW9uIH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBuZXdRdWVzdGlvbiA9IHsgbmFtZSwgZW1haWwsIHF1ZXN0aW9uLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksIHJlcGxpZXM6IFtdIH07XHJcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbigncXVlc3Rpb25zJykuaW5zZXJ0T25lKG5ld1F1ZXN0aW9uKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdRdWVzdGlvbiBhZGRlZCBzdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBhZGRpbmcgcXVlc3Rpb24nIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdQT1NUJ10pO1xyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRiIiwicXVlc3Rpb25zIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwidG9BcnJheSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5hbWUiLCJlbWFpbCIsInF1ZXN0aW9uIiwiYm9keSIsIm5ld1F1ZXN0aW9uIiwiRGF0ZSIsInJlcGxpZXMiLCJpbnNlcnRPbmUiLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/questions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/questions.js"));
module.exports = __webpack_exports__;

})();