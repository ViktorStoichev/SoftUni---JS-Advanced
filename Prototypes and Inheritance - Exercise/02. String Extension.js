(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function(n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        if (this.includes(' ')) {
            let words = this.split(' ');
            let result = [];
            for (let word of words) {
                if (result.join(' ').length + word.length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }
            return result.join(' ') + '...';
        }
        return this.slice(0, n - 3) + '...';
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})()