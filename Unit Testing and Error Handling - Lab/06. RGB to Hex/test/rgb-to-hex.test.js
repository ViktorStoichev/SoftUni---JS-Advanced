import { expect } from 'chai';
import { rgbToHexColor } from '../rgb-to-hex.js'

describe('rgbToHexColor', function() {
    it('should return #000000 for (0, 0, 0)', function() {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('should return #FFFFFF for (255, 255, 255)', function() {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return #FF0000 for (255, 0, 0)', function() {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('should return #00FF00 for (0, 255, 0)', function() {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('should return #0000FF for (0, 0, 255)', function() {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('should return #123456 for (18, 52, 86)', function() {
        expect(rgbToHexColor(18, 52, 86)).to.equal('#123456');
    });

    it('should return undefined for (-1, 0, 0)', function() {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('should return undefined for (0, -1, 0)', function() {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('should return undefined for (0, 0, -1)', function() {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('should return undefined for (256, 0, 0)', function() {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('should return undefined for (0, 256, 0)', function() {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it('should return undefined for (0, 0, 256)', function() {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('should return undefined for ("255", 0, 0)', function() {
        expect(rgbToHexColor("255", 0, 0)).to.be.undefined;
    });

    it('should return undefined for (255, "0", 0)', function() {
        expect(rgbToHexColor(255, "0", 0)).to.be.undefined;
    });

    it('should return undefined for (255, 0, "0")', function() {
        expect(rgbToHexColor(255, 0, "0")).to.be.undefined;
    });

    it('should return undefined for (255.5, 0, 0)', function() {
        expect(rgbToHexColor(255.5, 0, 0)).to.be.undefined;
    });

    it('should return undefined for (255, 0.5, 0)', function() {
        expect(rgbToHexColor(255, 0.5, 0)).to.be.undefined;
    });

    it('should return undefined for (255, 0, 0.5)', function() {
        expect(rgbToHexColor(255, 0, 0.5)).to.be.undefined;
    });

    it('should return #010203 for (1, 2, 3)', function() {
        expect(rgbToHexColor(1, 2, 3)).to.equal('#010203');
    });

    it('should return #FEFDFC for (254, 253, 252)', function() {
        expect(rgbToHexColor(254, 253, 252)).to.equal('#FEFDFC');
    });
});