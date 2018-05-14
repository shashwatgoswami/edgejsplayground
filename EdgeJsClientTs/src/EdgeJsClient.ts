import * as edge from "edge";

export class EdgeJsClient {
    private assemblyLocation: string = "../../EdgeJsServerNet/EdgeJsServerNet462/bin/Debug/";
    public ExecuteClrMethod(): void {
        const assembly: string = this.assemblyLocation + "EdgeJsServerNet462.dll";
        const clrMethod: any = edge.func({
            assemblyFile: assembly,
            typeName: "EdgeJsServerNet462.SimpleClass",
        });

        clrMethod("Love from Node", (error: any, result: any) => {
            if (error) {
                // something
            } else {
                const res = result;
            }
        });
    }
}
