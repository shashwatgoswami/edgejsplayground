"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var edge = __importStar(require("edge"));
var EdgeJsClient = /** @class */ (function () {
    function EdgeJsClient() {
        this.assemblyLocation = "../../EdgeJsServerNet/EdgeJsServerNet462/bin/Debug/";
    }
    EdgeJsClient.prototype.ExecuteClrMethod = function () {
        var assembly = this.assemblyLocation + "EdgeJsServerNet462.dll";
        var clrMethod = edge.func({
            assemblyFile: assembly,
            typeName: "EdgeJsServerNet462.SimpleClass",
        });
        clrMethod("Love from Node", function (error, result) {
            if (error) {
                // something
            }
            else {
                var res = result;
            }
        });
    };
    return EdgeJsClient;
}());
exports.EdgeJsClient = EdgeJsClient;
//# sourceMappingURL=EdgeJsClient.js.map