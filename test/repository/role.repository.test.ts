import { Role } from "../../database/connect";
import { RoleDTO } from "../../DTO/role.dto";
import { RoleRepository } from "../../repository/role.repository";
import { roleId, roleTypes } from "../../types/role";

describe('RoleRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Role find by id', () => {
        it("doit retourne les details du Role", async () => {
            const id = 1;

            const mockReponse: roleId = {
                id: 1,
                role: "a"
            }

            const expected: RoleDTO = {
                role: "a"
            }

            const repo = new RoleRepository()
            Role.findOne = jest.fn().mockResolvedValue(mockReponse)
            const result = await repo.findById(id)
            expect(result).toEqual(expected)
            expect(Role.findOne).toHaveBeenCalledTimes(1)
            expect(Role.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Role findAll', () => {
        it("doit retourne les details des roles", async () => {
            const mockReponse: roleId[] = [
                {
                    id: 1,
                    role: 'a'

                }, {
                    id: 2,
                    role: 'b'
                }
            ]

            const expected: RoleDTO[] = [
                {
                    role: 'a'
                }, {
                    role: 'b'
                }
            ]

            const repo = new RoleRepository()
            Role.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Role.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Role post', () => {
        it("doit retourne les details du Role", async () => {

            const mockReponse: roleTypes = {
                role: "test"
            }

            const expected: RoleDTO = {
                role: "test"
            }

            Role.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new RoleRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Role.create).toHaveBeenCalledTimes(1)
        })
    })

    describe('Role update', () => {
        it("doit retourne les details du Role", async () => {

            const mockReponse: roleTypes = {
                role: "test"
            }

            const expected: RoleDTO = {
                role: "test"
            }

            Role.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new RoleRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Role.create).toHaveBeenCalledTimes(1)

            const mockResponseU: RoleDTO = {
                role: "update"
            }

            Role.update = jest.fn().mockResolvedValue(mockResponseU)
            const a = Role.update(result)
            
            expect(await a).toEqual(mockResponseU)
            expect(Role.update).toHaveBeenCalledTimes(1)
        })
    })

})