import BankService from "services/BankService";
import ServerResponses from 'helpers/ServerResponses';

class BankController {
    static async getBanks(req, res, next) {
        try{
            const bankList = await BankService.getBanksList();
            return ServerResponses.successOk(res, 'successful', bankList);
        }catch(e){
            return next(e);
        }

    }
}

export default BankController;