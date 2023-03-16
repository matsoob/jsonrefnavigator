import * as path from 'path';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.languages.registerHoverProvider('json', {
		provideHover(document, position) {
		  const docLine = document.lineAt(position.line);
		  if (docLine.text.trim().startsWith(`"$ref"`)) {
			const hoverText = document.getText(document.getWordRangeAtPosition(position));
			if (hoverText.endsWith('.json"')){
				const roots = vscode.workspace.workspaceFolders;
				if (roots && roots.length === 1) {
					const referredJson = hoverText.trim().replace(/"/g,"");
					const fullPathToJson = path.join(roots[0].uri.path, referredJson);
					const message = `This is a [JSON reference](https://redocly.com/docs/resources/ref-guide/#json) to [${referredJson}](${fullPathToJson})`;
					const markdown = new vscode.MarkdownString(message);
					return new vscode.Hover(markdown);
				}
			}
		  }
		}
	  });
}
export function deactivate() {}
