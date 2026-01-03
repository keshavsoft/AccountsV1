import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnAccountName,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnAccountName,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit});

    return LocalFromDal;
};

export {
    postDefaultFunc
};