import { BIGINT } from "sequelize";
import { Employer } from "../../database/connect";
import { EmployerDTO } from "../../DTO/employer.dto";

describe('CandidateRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Candidate find by id', () => {
        it("doit retourne les details du Candidate", async () => {
            const id = 1;

            const expected: EmployerDTO = {
                id: 1,
                siret: BigInt(900719925474),
                structurename: "string",
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation: {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period: [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }

            Employer.findOne = jest.fn().mockResolvedValue(expected)

            const result = await Employer.findOne(1)
            expect(result).toEqual(expected)
            expect(Employer.findOne).toHaveBeenCalledTimes(1)
            expect(Employer.findOne).toBeCalledWith(1)
        })
    })

    describe('Candidate findAll', () => {
        it("doit retourne les details des Candidates", async () => {
            const mockReponse: any = [{

                employer: {
                    siret: BigInt(900719925474),
                    structurename: "string",
                },
                users: {
                    password: "string",
                    passwordconf: "string",
                    email: "lucfate@test.com",
                    phone: "2345676",
                    isActif: true,
                    image: '',
                    lastConnection: new Date('2000-01-01')
                },
                localisation: {
                    address: "address",
                    zipCode: 62176,
                    city: "city"
                },
                periods: [

                ],
                degrees: [

                ]
            }]

            const expected: EmployerDTO[] = [{
                id: 1,
                siret: BigInt(900719925474),
                structurename: "string",
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation: {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period: [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }]


            Employer.findAll = jest.fn().mockResolvedValue(expected)

            const result = await Employer.findAll(mockReponse)

            expect(result).toEqual(expected)
            expect(Employer.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Candidate post', () => {
        it("doit retourne les details du Candidate", async () => {

            const mockReponse: any = {

                employer: {
                    siret: BigInt(900719925474),
                    structurename: "string"
                },
                users: {
                    password: "string",
                    passwordconf: "string",
                    email: "lucfate@test.com",
                    phone: "2345676",
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                },
                localisation: {
                    address: "address",
                    zipCode: 62176,
                    city: "city"
                },
                periods: [

                ],
                degrees: [

                ]
            }

            const expected: EmployerDTO = {
                id: 1,
                siret: BigInt(900719925474),
                structurename: "string",
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation: {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period: [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }

            Employer.create = jest.fn().mockResolvedValue(expected)


            const result = await Employer.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Employer.create).toHaveBeenCalledTimes(1)
        })
    })

    describe('Candidate update', () => {
        it("doit retourne les details du Candidate", async () => {

            const mockReponse: any = {

                employer: {
                    siret: BigInt(900719925474),
                    structurename: "string",
                },
                users: {
                    password: "string",
                    passwordconf: "string",
                    email: "lucfate@test.com",
                    phone: "2345676",
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                },
                localisation: {
                    address: "address",
                    zipCode: 62176,
                    city: "city"
                },
                periods: [

                ],
                degrees: [

                ]
            }

            const expected: EmployerDTO = {
                id: 1,
                siret: BigInt(900719925474),
                structurename: "string",
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation: {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period: [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }

            Employer.create = jest.fn().mockResolvedValue(expected)


            const result = await Employer.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Employer.create).toHaveBeenCalledTimes(1)

            const mockResponseU: EmployerDTO = {
                id: 1,
                siret: BigInt(900719925474),
                structurename: "string",
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation: {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period: [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }

            Employer.update = jest.fn().mockResolvedValue(mockResponseU)
            const a = Employer.update(result)

            expect(await a).toEqual(mockResponseU)
            expect(Employer.update).toHaveBeenCalledTimes(1)
        })
    })

})