import { Degree } from "../../database/connect";
import { DegreeDTO } from "../../DTO/degree.dto";
import { DegreeRepository } from "../../repository/degree.repository";
import { degreeId } from "../../types/degree";

describe('DegreeRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Degree find by id', () => {
        it("doit retourne les details du Degree", async () => {
            const id = 1;

            const mockReponse: degreeId = {
                id: 1,
                degreename: "a"
            }

            const expected: DegreeDTO = {
                id: 1,
                degreename: "a"
            }

            const repo = new DegreeRepository()
            Degree.findOne = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

            expect(result).toEqual(expected)
            expect(Degree.findOne).toHaveBeenCalledTimes(1)
            expect(Degree.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Degree findAll', () => {
        it("doit retourne les details des Degrees", async () => {
            const mockReponse: degreeId[] = [
                {
                    id: 1,
                    degreename: 'a'

                }, {
                    id: 2,
                    degreename: 'b'
                }
            ]

            const expected: DegreeDTO[] = [
                {
                    id:1,
                    degreename: 'a'
                }, {
                    id:2,
                    degreename: 'b'
                }
            ]

            const repo = new DegreeRepository()
            Degree.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Degree.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Degree post', () => {
        it("doit retourne les details du Degree", async () => {

            const mockReponse: any= {
                id:1,
                degreename: "test"
            }

            const expected: DegreeDTO = {
                id:1,
                degreename: "test"
            }

            Degree.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new DegreeRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Degree.create).toHaveBeenCalledTimes(1)
        })
    })

    describe('Degree update', () => {
        it("doit retourne les details du Degree", async () => {

            const mockReponse: any = {
                id:1,
                degreename: "test"
            }

            const expected: DegreeDTO = {
                id: 1,
                degreename: "test"
            }

            Degree.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new DegreeRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Degree.create).toHaveBeenCalledTimes(1)

            const mockResponseU: DegreeDTO = {
                id:1,
                degreename: "update"
            }

            Degree.update = jest.fn().mockResolvedValue(mockResponseU)
            const a = Degree.update(result)
            
            expect(await a).toEqual(mockResponseU)
            expect(Degree.update).toHaveBeenCalledTimes(1)
        })
    })

})