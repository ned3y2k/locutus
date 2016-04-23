// var fs = require('fs')
var path = require('path')
var expect = require('chai').expect
var Util = require('../src/_util/util')

describe('locutusutil', function () {
  describe('load', function () {
    it('should parse array_change_key_case correctly', function (done) {
      var util = new Util({
        __root: path.dirname(__dirname),
        __src: path.dirname(__dirname) + '/src',
        __test: path.dirname(__dirname) + '/test'
      })

      var relative = 'php/array/' + 'array_change_key_case.js'

      util.load(relative, {}, function (err, params) {
        expect(err).to.deep.equal(null)
        expect(params.headKeys.example[0][0]).to.deep.equal('array_change_key_case(42)')
        done()
      })
    })
  })
})
