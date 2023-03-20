import { Period } from "../../database/connect";
import { PeriodDTO } from "../../DTO/period.dto";
import { PeriodRepository } from "../../repository/period.repository";
import { periodId } from "../../types/period";

describe('PeriodRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Period find by id', () => {
        it("doit retourne les details du Period", async () => {
            const id = 1;

            const mockReponse: periodId = {
                id: 1,
                periodname: "a"
            }

            const expected: PeriodDTO = {
                id: 1,
                periodname: "a"
            }

            const repo = new PeriodRepository()
            Period.findOne = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

            expect(result).toEqual(expected)
            expect(Period.findOne).toHaveBeenCalledTimes(1)
            expect(Period.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Period findAll', () => {
        it("doit retourne les details des Periods", async () => {
            const mockReponse: periodId[] = [
                {
                    id: 1,
                    periodname: 'a'

                }, {
                    id: 2,
                    periodname: 'b'
                }
            ]

            const expected: PeriodDTO[] = [
                {
                    id:1,
                    periodname: 'a'
                }, {
                    id:2,
                    periodname: 'b'
                }
            ]

            const repo = new PeriodRepository()
            Period.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Period.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Period post', () => {
        it("doit retourne les details du Period", async () => {

            const mockReponse: any= {
                id:1,
                periodname: "test"
            }

            const expected: PeriodDTO = {
                id:1,
                periodname: "test"
            }

            Period.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new PeriodRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Period.create).toHaveBeenCalledTimes(1)
        })
    })

    describe('Period update', () => {
        it("doit retourne les details du Period", async () => {

            const mockReponse: any = {
                id:1,
                periodname: "test"
            }

            const expected: PeriodDTO = {
                id: 1,
                periodname: "test"
            }

            Period.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new PeriodRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Period.create).toHaveBeenCalledTimes(1)

            const mockResponseU: PeriodDTO = {
                id:1,
                periodname: "update"
            }

            Period.update = jest.fn().mockResolvedValue(mockResponseU)
            const a = Period.update(result)
            
            expect(await a).toEqual(mockResponseU)
            expect(Period.update).toHaveBeenCalledTimes(1)
        })
    })

})