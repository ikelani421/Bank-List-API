import models from '../database/models';

const { Institution, InstitutionType } = models;

/**
 * @description class will implement functionalities for Processors model
 *
 * @class ProcessorModel
 */
class BankRepository {
  /**
     * @description get all banks
    * @param {object} limit - the limit
     * @param {object} offset - the offset
     * @returns {function} passes onto the next middleware
     */
  static async getAllBanks(limit, offset) {
    return Institution.findAndCountAll({
      logging: console.log,
      attributes: [
        'code', 'shortName', 'name', 'status'
      ],
      include: [
        {
          model: InstitutionType,
          as: 'institutionType',
          where: { name: 'BANK' },
          attributes: [
          ],
        }
      ],
      limit,
      offset,
    });
  }

  /**
     * @description get all banks without limit
     * @returns {function} passes onto the next middleware
     */
  static async getAllBanksAlone() {
    return Institution.findAll({
      raw: true,
      attributes: [
        'code', 'shortName', 'name', 'status'
      ],
      include: [
        {
          model: InstitutionType,
          as: 'institutionType',
          attributes: [
          ],
          where: { name: 'BANK' },
        }
      ],
      // raw: true,
    });
  }
}

export default BankRepository;
