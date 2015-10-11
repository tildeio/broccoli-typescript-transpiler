import _tsconfig = require('tsconfig');

class ConfigParser {
	constructor(private options: TypeScriptFilterOptions = {},
				private tsconfig = _tsconfig) {}

	generalOptions(): TypeScriptFilterGeneralOptions {
		return this.options.options || {};
	}
	tsOptions(): _tsconfig.Options {
		if (!this.options.tsConfigPath) {
			return this.options.tsOptions || {};
		}

		return this.tsconfig.loadSync(this.options.tsConfigPath, this.options.tsOptions || {});
	}
}

export = ConfigParser;