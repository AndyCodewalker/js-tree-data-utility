let main = require("./main.js");

describe("Test reverseBranch", () => {
    test("Input one layer object.", () => {
        let testValue = {
            "foo": 1
        };
        let expectValue = {
            "1": "foo"
        };
        expect(main.reverseBranch(testValue)).toEqual(expectValue);
    });
    test("Input multi layer object.", () => {
        let testValue = {
            "hired": {
                "be": {
                    "to": {
                        "deserve": "I"
                    }
                }
            }
        };
        let expectValue = {
            "I": {
                "deserve": {
                    "to": {
                        "be": "hired"
                    }
                }
            }
        };
        expect(main.reverseBranch(testValue)).toEqual(expectValue);
    });
    test("Input multi layer object with inappropriate type. (the target type is't object. ex: function)", () => {
        let testValue = {
            "hired": {
                "be": {
                    "to": {
                        "deserve": () => { return "test"; }
                    }
                }
            }
        };
        let expectValue = {
            "function": {
                "deserve": {
                    "to": {
                        "be": "hired"
                    }
                }
            }
        };
        expect(main.reverseBranch(testValue)).toEqual(expectValue);
    });
    test("Input multi layer object with inappropriate type. (the target type is't object. ex: boolean)", () => {
        let testValue = {
            "hired": {
                "be": {
                    "to": {
                        "deserve": true
                    }
                }
            }
        };
        let expectValue = {
            "boolean": {
                "deserve": {
                    "to": {
                        "be": "hired"
                    }
                }
            }
        };
        expect(main.reverseBranch(testValue)).toEqual(expectValue);
    });
    test("Input multi layer object with multi-branch.", () => {
        let testValue = {
            "xyz": {
                "ijk": {
                    "aa": 11,
                    "bb": {
                        "mm": 22,
                        "nn": 33
                    }
                }
            }
        };
        let expectValue = {
            "multi-branch-exist": {
                "ijk": "xyz"
            }
        };
        expect(main.reverseBranch(testValue)).toEqual(expectValue);
    });
    test("Input multi layer object with multi-branch in root layer.", () => {
        let testValue = {
            "xyz": {
                "aa": {
                    "bb": {
                        "cc": {
                            "dd": "ee"
                        }
                    }
                }
            },
            "ijk": {
                "foo": false
            },
            "lmn": {
                "bar": () => { return "test"; }
            }
        };
        let expectValue = {
            "root": "multi-branch-exist"
        };
        expect(main.reverseBranch(testValue)).toEqual(expectValue);
    });
    test("Input data is not object type.", () => {
        let testValue = (() => {
            return "test";
        });
        let expectValue = null;
        expect(main.reverseBranch(testValue)).toBeNull();
    });
});



// let inputValue2 = {
//     foo: 1,
//     bar: function () { return "XD"; },
//     xyz: {
//         aa: 11,
//         bb: "22"
//     },
//     777: 888
// };

// // reverseBranch(inputValue2);

// let inputValue3 = {
//     hired: {
//         be: {
//             to: {
//                 deserve: 'I'
//             }
//         }
//     }
// };

// // reverseBranch(inputValue3);

// let inputValue4 = {
//     xyz: {
//         aa: 11,
//         bb: "22"
//     }
// };

// // reverseBranch(inputValue4);

// let inputValue5 = {
//     xyz: {
//         ijk: {
//             aa: 11,
//             bb: "22"
//         }
//     }
// };

// // reverseBranch(inputValue5);

// let inputValue6 = {
//     xyz: {
//         ijk: {
//             aa: true,
//         }
//     }
// };

//         // reverseBranch(inputValue6);