"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var edgeclient = __importStar(require("./EdgeJsClient"));
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var edge = new edgeclient.EdgeJsClient();
        edge.ExecuteClrMethod();
    };
    return Program;
}());
exports.Program = Program;
Program.Main();
//# sourceMappingURL=app.js.map