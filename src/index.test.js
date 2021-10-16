const rewire = require("rewire")
const index = rewire("./index")
const apiUrl = index.__get__("apiUrl")
// @ponicode
describe("apiUrl", () => {
    test("0", () => {
        let callFunction = () => {
            apiUrl(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            apiUrl("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            apiUrl(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            apiUrl(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            apiUrl(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            apiUrl(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
