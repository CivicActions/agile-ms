# Offline Geolocation Tool

The file index.html started out as a geolocation tool 5 nonths ago as part of an
effort for the State of California [https://github.com/RobertLRead/chhs-geojson](https://github.com/RobertLRead/chhs-geojson).
It is **not** part of the code that implements
our protype for the State of Mississippi to find day care providers.  Rather,
it was used in an offline mode to find geolocation data that eventually was
placed in api.json to be used by that system.

This is more of a programming tool than a user-based tool; each use requires
a programmer to modify the code. An google places APIKEY must be provided
and the portion of the file to geolocate must be determined. As such it
is minimally documented, because it was only used once, and by hand,
to attempt to geolocate the MS data. Furthermore, due to rate limits
in the unpaid use of the Google API, this had to be done in pieces,
which was tedious, and the resulting files cut by hand from the
HTML and edited together into a file.
