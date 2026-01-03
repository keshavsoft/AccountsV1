import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnAccountName,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnAccountName,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};