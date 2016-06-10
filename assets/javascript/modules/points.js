(function ($) {
    "use strict";

    var points = {
        a: {x: 0, y: 0},
        b: {x: 100, y: 0},
        c: {x: 250, y: 0},
        d: {x: 400, y: 0},
        e: {x: 500, y: 0},
        f: {x: 500, y: 100},
        g: {x: 500, y: 250},
        h: {x: 500, y: 400},
        i: {x: 500, y: 500},
        j: {x: 400, y: 500},
        k: {x: 250, y: 500},
        l: {x: 100, y: 500},
        m: {x: 0, y: 500},
        n: {x: 0, y: 400},
        o: {x: 0, y: 250},
        p: {x: 0, y: 100},
        q: {x: 100, y: 100},
        r: {x: 250, y: 100},
        s: {x: 400, y: 100},
        t: {x: 100, y: 250},
        u: {x: 250, y: 250},
        v: {x: 400, y: 250},
        w: {x: 100, y: 400},
        x: {x: 250, y: 400},
        y: {x: 400, y: 400},
    };

    var forms = {
        geometrique: {
            insert: " ",
            cercle: [points.c, "arc", points.g,"arc", points.k, "arc" ,points.o , "arc"],
            rectrot: [points.c, points.g, points.k ,points.o ],
            demicercle: [points.o, "arc", points.g],
            rect1: [points.a, points.e, points.i, points.m],
            rect2: [points.q, points.s, points.y, points.w],
            triangleIarcarc: [points.c, "arc", points.i, "arc", points.m, "arc"],
            poliG: [points.b, points.c, points.k, points.l, points.n, points.p],
            poliD: [points.c, points.d, points.f, points.h, points.j, points.k],
            poli: [points.b, points.d, points.f, points.h, points.j, points.l, points.n, points.p],
            porte: [points.q, points.l, points.m, points.a, points.e, points.i, points.j, points.s],
            ported: [points.q, points.l, points.m, points.a, "arc", points.e, points.i, points.j, points.s , "arc"],
        },
        type2: {
            itop: [points.p, points.f],
            ibottom: [points.n, points.h],
            ldroite: [points.d, points.j],
            lgauche: [points.b, points.l]
        }
    };

    window.points = points;
    window.forms = forms;

})(jQuery);