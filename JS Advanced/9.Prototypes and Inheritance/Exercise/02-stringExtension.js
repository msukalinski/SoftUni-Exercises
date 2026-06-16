(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let lastSpaceIndex = this.length;
            do {
                lastSpaceIndex = this.lastIndexOf(' ', lastSpaceIndex - 1);
            } while (lastSpaceIndex !== -1 && lastSpaceIndex + 3 > n);
            return `${this.slice(0, lastSpaceIndex)}...`;
        }

        if (n > 3) {
            let truncatedString = `${this.slice(0, n - 3)}...`;
            return truncatedString;
        }

        return '.'.repeat(n);
    };

    String.format = function (str, ...params) {
        let placeHoldPattern = /{(\d+)}/gm;

        for (let match of str.matchAll(placeHoldPattern)) {
            let placeholdValue = match[1];

            params[placeholdValue] !== undefined ?
                str = str.replace(`{${placeholdValue}}`, params[(placeholdValue)]) : '';
        }

        return str;
    };
})();