/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
(function () {
	'use strict';

	const bootstrap = bootstrapLib();
	const bootstrapWindow = bootstrapWindowLib();

	// Avoid Monkey Patches from Application Insights
	bootstrap.avoidMonkeyPatchFromAppInsights();

	// Load shared process into window
	bootstrapWindow.load(['vs/code/electron-browser/sharedProcess/sharedProcessMain'], function (sharedProcess, configuration) {
		return sharedProcess.main(configuration);
	});

	/**
	 * @returns {{ avoidMonkeyPatchFromAppInsights: () => void; }}
	 */
	function bootstrapLib() {
		// @ts-ignore (defined in bootstrap.js)
		return window.MonacoBootstrap;
	}

	/**
	 * @returns {{
	 *   load: (
	 *     modules: string[],
	 *     resultCallback: (result, configuration: import('../../../base/parts/sandbox/common/sandboxTypes').ISandboxConfiguration) => unknown,
	 *     options?: {
	 *       configureDeveloperKeybindings?: (config: import('../../../base/parts/sandbox/common/sandboxTypes').ISandboxConfiguration) => {forceEnableDeveloperKeybindings?: boolean, disallowReloadKeybinding?: boolean, removeDeveloperKeybindingsAfterLoad?: boolean},
	 * 	     canModifyDOM?: (config: import('../../../base/parts/sandbox/common/sandboxTypes').ISandboxConfiguration) => void,
	 * 	     beforeLoaderConfig?: (loaderConfig: object) => void,
	 *       beforeRequire?: () => void
	 *     }
	 *   ) => Promise<unknown>
	 * }}
	 */
	function bootstrapWindowLib() {
		// @ts-ignore (defined in bootstrap-window.js)
		return window.MonacoBootstrapWindow;
	}
}());
