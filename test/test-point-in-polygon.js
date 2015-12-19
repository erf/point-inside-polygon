"use strict";

var assert  = require('assert');
var inside  = require('../index');

describe('poly-overlap', function () {

    it('point in poly', function(){
        assert(inside([1,1], [[0,0], [2,0], [2,2], [0,0]])===true);
    });

    it('point outside poly', function(){
        assert(inside([1,2.5], [[0,0], [2,0], [2,2], [0,0]])===false);
    });

});
