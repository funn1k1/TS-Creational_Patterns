"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }
    addJpeg() {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }
    addResolution(width, height) {
        const isSome = this.resolutions.some((res) => res.width == width && height == height);
        if (!isSome) {
            this.resolutions.push({ width, height });
        }
        return this;
    }
    build() {
        const res = [];
        for (const resolution of this.resolutions) {
            for (const format of this.formats) {
                res.push({
                    format: format,
                    width: resolution.width,
                    height: resolution.height
                });
            }
        }
        return res;
    }
}
console.log(new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(300, 300)
    .build());
