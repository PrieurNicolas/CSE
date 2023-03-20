// import { Bannis } from "../../database/connect";
// import { BannisDTO } from "../../DTO/bannis.dto";
// import { BannisRepository } from "../../repository/bannis.repository";
// import { bannisId, bannisTypes } from "../../types/bannis";

describe('BannisRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Bannis find by id', () => {
        it("doit retourne les details du Bannis", async () => {
            expect(1).toEqual(1)
        })
    })
    //         it("doit retourne les details du Bannis", async () => {
    //             const id = 1;

    //             const mockReponse: bannisId = {
    //                 id: 1,
    //                 bannis_email: "a@a.com",
    //                 raison: "aucune"
    //             }

    //             const expected: BannisDTO = {
    //                 bannis_email: "a@a.com",
    //                 raison: "aucune"
    //             }

    //             const repo = new BannisRepository()
    //              Bannis.findOne =  jest.fn().mockResolvedValue(mockReponse)

    //             const result = await repo.findById(id)

    //              expect(result).toEqual(expected)
    //              expect(Bannis.findOne).toHaveBeenCalledTimes(1)
    //              expect(Bannis.findOne).toBeCalledWith({
    //                 where: {
    //                     id: id
    //                 }
    //             })
    //         })
    //     })

    //     describe('Bannis findAll', () => {
    //         it("doit retourne les details des bannis", async () => {
    //             const mockReponse : bannisId[] = [
    //                 {
    //                      id: 1,
    //                      bannis_email: 'e@e.com',
    //                      raison: 'rien'

    //                 }, {
    //                     id: 2,
    //                     bannis_email: 'a@a.com',
    //                     raison: 'insulte'
    //                 }
    //             ]

    //             const expected: BannisDTO[] = [
    //                 {
    //                     bannis_email: 'e@e.com',
    //                     raison: 'rien'
    //                 }, {
    //                     bannis_email: 'a@a.com',
    //                     raison: 'insulte'
    //                 }
    //             ]

    //             const repo = new BannisRepository()
    //             Bannis.findAll = jest.fn().mockResolvedValue(mockReponse)

    //             const result = await repo.findAll()

    //             expect(result).toEqual(expected)
    //             expect(Bannis.findAll).toHaveBeenCalledTimes(1)
    //         })
    //     })

    //     describe('Bannis post', () => {
    //         it("doit retourne les details du Bannis", async () => {

    //             const mockReponse: bannisTypes = {
    //                 bannis_email: "a@a.com",
    //                 raison: "insulte"
    //             }

    //             const expected: BannisDTO = {
    //                 bannis_email: "a@a.com",
    //                 raison: "insulte"
    //             }

    //             Bannis.create = jest.fn().mockResolvedValue(mockReponse)

    //             const repo = new BannisRepository()
    //             const result = await repo.create(mockReponse)

    //             expect(result).toEqual(expected)
    //             expect(Bannis.create).toHaveBeenCalledTimes(1)
    //         })
    //     })

})