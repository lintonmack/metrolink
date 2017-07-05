var stationNames = [
  'Altrincham', 
  'Navigation Road', 
  'Timperley', 
  'Brooklands', 
  'Sale',
  'Dane Road',
  'Stretford',
  'Old Trafford',
  'Trafford Bar',
  'Cornbrook',
  'Deansgate-Castlefield',
  'St Peter\'s Square',
  'Piccadilly Gardens',
  'Piccadilly',
  'New Islington',
  'Holt Town',
  'Etihad Campus',
  'Velopark',
  'Clayton Hall',
  'Edge Lane',
  'Cemetery Road',
  'Droylsden',
  'Audenshaw',
  'Ashton Moss',
  'Ashton West',
  'Ashton-under-Lyne'
]

var altrinchamToAshtonUnderLyne = new Route()

var stations = $.each(stationNames, function (stationIndex, stationName) {
    altrinchamToAshtonUnderLyne.addStation(new Station(stationName))
})

var tram = new Tram(altrinchamToAshtonUnderLyne, altrinchamToAshtonUnderLyne.getStations()[0]) 

function updateDOM() {
$('#stations').html('')

$.each(altrinchamToAshtonUnderLyne.getStations(), function (stationIndex, station){
    var css = ''

    if (tram.getCurrentStation() === station) {
      css = '-current'
    }
    
    var stationHTML = '<div class="station">'
    stationHTML += '<div class="circle ' + css + '"></div>'
    stationHTML += '<div class="name">' + station.getName() + '</div>'
    stationHTML += '</div>'

    $('#stations').append(stationHTML)
})
}

$('#nextStationBtn').click(function () {
    tram.drive()
    updateDOM()
})


updateDOM()

