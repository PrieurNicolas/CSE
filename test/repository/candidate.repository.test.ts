import { Candidate } from "../../database/connect";
import { CandidateDTO } from "../../DTO/candidate.dto";

describe('CandidateRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Candidate find by id', () => {
        it("doit retourne les details du Candidate", async () => {
            const id = 1;

            const expected: CandidateDTO = {
                id: 1,
                firstname: "a",
                lastname: "a",
                birthday: new Date("1999-01-01"),
                wantToBe: "a",
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
                },
                permis: false
            }

            Candidate.findOne = jest.fn().mockResolvedValue(expected)

            const result = await Candidate.findOne(1)
            expect(result).toEqual(expected)
            expect(Candidate.findOne).toHaveBeenCalledTimes(1)
            expect(Candidate.findOne).toBeCalledWith(1)
        })
    })

    describe('Candidate findAll', () => {
        it("doit retourne les details des Candidates", async () => {
            const mockReponse: any = [{

                candidate: {
                    firstname: "a",
                    lastname: "a",
                    birthday: new Date("1999-01-01"),
                    wantToBe: "a",
                    permis:false
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
            }]

            const expected: CandidateDTO[] = [{
                id: 1,
                firstname: "a",
                lastname: "a",
                birthday: new Date("1999-01-01"),
                wantToBe: "a",
                permis: false,
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation : {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period : [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                    
                }
            }]

         
            Candidate.findAll = jest.fn().mockResolvedValue(expected)

            const result = await Candidate.findAll(mockReponse)

            expect(result).toEqual(expected)
            expect(Candidate.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Candidate post', () => {
        it("doit retourne les details du Candidate", async () => {

            const mockReponse: any = {

                candidate: {
                    firstname: "a",
                    lastname: "a",
                    birthday: new Date("1999-01-01"),
                    wantToBe: "a",
                    permis: false
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

            const expected: CandidateDTO = {
                id: 1,
                firstname: "a",
                lastname: "a",
                birthday: new Date("1999-01-01"),
                wantToBe: "a",
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
                },
                permis: false
            }

            Candidate.create = jest.fn().mockResolvedValue(expected)

       
            const result = await Candidate.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Candidate.create).toHaveBeenCalledTimes(1)
        })
    })

    describe('Candidate update', () => {
        it("doit retourne les details du Candidate", async () => {

            const mockReponse: any = {

                candidate: {
                    firstname: "a",
                    lastname: "a",
                    birthday: new Date("1999-01-01"),
                    wantToBe: "a",
                    permis:false
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
            }

            const expected: CandidateDTO = {
                id: 1,
                firstname: "a",
                lastname: "a",
                birthday: new Date("1999-01-01"),
                wantToBe: "a",
                permis: false,
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation : {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period : [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }

            Candidate.create = jest.fn().mockResolvedValue(expected)

            
            const result = await Candidate.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Candidate.create).toHaveBeenCalledTimes(1)

            const mockResponseU: CandidateDTO = {
                id: 1,
                firstname: "b",
                lastname: "a",
                birthday: new Date("1999-01-01"),
                wantToBe: "a",
                permis:false,
                User: {
                    email: "lucfate@test.com",
                    phone: 2345676,
                    Localisation : {
                        id: 1,
                        address: "address",
                        zipCode: 62176,
                        city: "city"
                    },
                    Period : [],
                    Degree: [],
                    image: '',
                    isActif: true,
                    lastConnection: new Date('2000-01-01')
                }
            }

            Candidate.update = jest.fn().mockResolvedValue(mockResponseU)
            const a = Candidate.update(result)

            expect(await a).toEqual(mockResponseU)
            expect(Candidate.update).toHaveBeenCalledTimes(1)
        })
    })

})