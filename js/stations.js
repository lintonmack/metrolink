function Station (name) {
    this._name = name
}

Station.prototype = {
    getName: function () {
        return this._name
    }
}