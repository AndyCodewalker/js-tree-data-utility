const recursiveReverseBranch = (branch) => {

    if (Object.keys(branch).length > 1) {
        return ["multi-branch-exist"];
    }

    for (const key in branch) {
        const value = branch[key];

        if (typeof value === "object") {
            let reversedArray = recursiveReverseBranch(value);
            reversedArray.push(key);
            return reversedArray;
        }

        let valueType = (typeof value);
        let endKey = "";
        let endValue = key;

        switch (valueType) {
            case "string":
                endKey += value;
                break;

            case "number":
                endKey += value.toString();
                break;

            default:
                endKey += valueType;
        }

        return [endKey, endValue];
    }
};

const reverseBranch = (branch) => {

    let reversedBranchArray = [];

    if (typeof branch !== "object") {
        return null;
    }
    else {
        reversedBranchArray = recursiveReverseBranch(branch);
    }

    //

    let reversedBranchObj = {}
    let branchLength = reversedBranchArray.length;

    if (branchLength === 1) {    // in this case mean there have multi keys in object root
        reversedBranchObj["root"] = reversedBranchArray[0];
    }
    else {
        let tempObj = reversedBranchObj;    // a moving reference to internal objects within obj

        for (let i = 0; i < (branchLength - 1); i++) {
            let elem = reversedBranchArray[i];
            tempObj[elem] = {};

            if ((i + 1) !== (branchLength - 1)) {
                tempObj = tempObj[elem];
            }
        }

        tempObj[reversedBranchArray[branchLength - 2]] = reversedBranchArray[branchLength - 1];
    }

    return reversedBranchObj;
};

//

module.exports = {
    reverseBranch: reverseBranch
};