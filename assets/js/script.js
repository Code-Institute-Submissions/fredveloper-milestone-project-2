// $(document).ready(function() {
//     var locations = {
//         'ar': ['Buenos Aires'],
//         'au': ['Sidney'],
//         'at': ['Vienna'],
//         'be': ['Antwerp', 'Brussels'],
//         'br': ['São Paulo'],
//         'ca': ['Hamilton', 'Toronto', 'Ottawa'],
//         'cz': ['Prague'],
//         'dk': ['Copenhagen'],
//         'fi': ['Helsinki'],
//         'fr': ['Avignon', 'Lille', 'Lyon', 'Paris'],
//         'de': ['Berlin', 'Bremen', 'Cologne', 'Dresden', 'Essen', 'Frankfurt', 'Greifswald', 'Mannheim', 'Munich', 'Wuppertal'],
//         'ie': ['Dublin'],
//         'il': ['Haifa', 'Jerusalem', 'Tel Aviv'],
//         'it': ['Rome, Vatican City'],
//         'jp': ['Hakone', 'Hiroshima', 'Izumi', 'Kasama', 'Kitashiobara', 'Komaki', 'Tokyo', 'Yoshiwa'],
//         'mx': ['Mexico City'],
//         'nl': ['Amsterdam', 'Assen', 'Groningen', 'Otterlo', 'Rotterdam', 's-Hertogenbosch', 'The Hague', 'Utrecht', 'Zwolle'],
//         'pl': ['Warsaw'],
//         'ru': ['Moscow', 'Saint Petersburg'],
//         'rs': ['Belgrade'],
//         'es': ['Madrid'],
//         'se': ['Stockholm', 'Gothenburg'],
//         'ch': ['Baden', 'Basel', 'Bern', 'Geneva', 'La Chaux-de-Fonds', 'Solothurn', 'Vevey', 'Winterthur', 'Zürich'],
//         'gb': ['Birmingham', 'Cambridge', 'Cardiff', 'Edinburgh', 'Glasgow', 'London', 'Oxford'],
//         'us': ['Baltimore', 'Boston', 'Buffalo', 'Cambridge', 'Chicago', 'Cincinnati', 'Cleveland', 'Dallas', 'Denver', 'Detroit', 'Hartford', 'Honolulu', 'Kansas City', 'Los Angeles', 'Minneapolis', 'New Haven', 'New York', 'Norman', 'Pasadena', 'Philadelphia', 'Pittsburgh', 'Portland', 'Princeton', 'Providence', 'Richmond', 'San Antonio', 'San Francisco', 'St. Louis', 'Toledo', 'Washington D.C.', 'Williamstown', 'Winona'],
//     }

//     var $locations = $('#location');
//     $('#country').change(function () {
//         var country = $(this).val(),
//             lcns = locations[country] || [];

//         var html = $.map(lcns, function (lcn) {
//             return '<option value="' + lcn + '">' + lcn + '</option>'
//         }).join('');
//         $locations.html(html)
//     });
// });