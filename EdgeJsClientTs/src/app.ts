import * as edgeclient from "./EdgeJsClient";
export class Program {
    public static Main(): void {
        const edge: edgeclient.EdgeJsClient = new edgeclient.EdgeJsClient();
        edge.ExecuteClrMethod();
    }
}

Program.Main();
