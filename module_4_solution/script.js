(function() {
    var names = ["Aman", "John", "Avinash", "Jason", "Yaswanth", "Ram", "Larry", "pal", "Siva", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();