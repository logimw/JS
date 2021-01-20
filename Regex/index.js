(function() {
    function TrollKiller(field, restricetdWords) {
        this._field = field;
        this._rWords = restricetdWords.split(/, */);
        this._regex = new RegExp("(" + this._rWords.join("|") + ")", "igm");
        this._assignEvents();

        console.log(this._rWords.join("|"));
        console.log(this._regex);
    };

    TrollKiller.prototype._censorSigns = "!#$@(*&^".split("");

    TrollKiller.prototype._assignEvents = function () {
        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);
    };

    TrollKiller.prototype._filterMessage = function (e) {
        this._field.value = this._field.value.replace(this._regex, function(match) {
            return this._censorWord(match);
        }.bind(this));
    };

    TrollKiller.prototype._censorWord = function(word) {
        var censored = "",
            random = 0;

        for (var i = 0; i < word.length; i++) {
            random = Math.round(Math.random() * (this._censorSigns.length - 1 - 0) + 0);
            censored += this._censorSigns[random];
        }

        return censored;
    }

    var tk = new TrollKiller(document.querySelector('[name="message"]'), "dupa, kasztan, gruchanie, dzida, areozol");
})();
