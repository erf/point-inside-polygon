"use strict";

function inside (p, poly) {
    var i, j, c = false, nvert = poly.length;
    for (i = 0, j = nvert - 1; i < nvert; j = i++) {
        if (((poly[i][1] > p[1]) !== (poly[j][1] > p[1])) &&
            (p[0] < (poly[j][0] - poly[i][0]) * (p[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])) {
                c = !c;
            }
    }
    return c;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = inside;
}

