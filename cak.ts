//% weight=100 color=#421C52 icon="\uf1b9"
namespace cak {
    export enum Pin {
        PIN_0 = 0,
        PIN_1 = 1,
        PIN_2 = 2,
        PIN_8 = 8,
        PIN_12 = 12
    }
    export let M2_PWR: number = DigitalPin.P13
    export let M2_DIR: number = DigitalPin.P14
    export let M1_PWR: number = DigitalPin.P15
    export let M1_DIR: number = DigitalPin.P16
}
