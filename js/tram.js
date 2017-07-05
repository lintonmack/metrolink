function Tram (route, startingStation) {
    this._route = route
    this._currentStation = startingStation
}

Tram.prototype = {
    getCurrentStation: function () {
        return this._currentStation
    },
    drive: function() {
        var routeStations = this._route.getStations()
        var currentStationIndex = routeStations.indexOf(this._currentStation)
        var nextStationIndex = currentStationIndex + 1
console.log(currentStationIndex)
console.log(nextStationIndex.length)
console.log(routeStations)
console.log(routeStations.length)
        if (nextStationIndex >= routeStations.length) {
            return 'End of line!'
        }
        this._currentStation = routeStations[nextStationIndex]

        return 'Now arriving at: ' + this._currentStation.getName()
    }, reset: function () {
        this._currentStation = this._route.getStations()[0]
    }
}

$('#reset').click(function () {
  tram.reset()
  updateDOM()
})

