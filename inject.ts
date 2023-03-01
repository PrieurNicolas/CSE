import { AdminHandler } from "./handler/admin.handler";
import { AuthHandler } from "./handler/auth.handler";
import { CandidateHandler } from "./handler/candidate.handler";
import { DegreeHandler } from "./handler/degree.handler";
import { LocalisationHandler } from "./handler/localisation.handler";
import { PeriodHandler } from "./handler/period.handler";
import { RoleHandler } from "./handler/role.handler";
import { TokenHandler } from "./handler/token.handler";
import { UserHandler } from "./handler/user.handler";
import { AdminRepository } from "./repository/admin.repository";
import { AuthRepository } from "./repository/auth.repository";
import { CandidateRepository } from "./repository/candidate.repository";
import { DegreeRepository } from "./repository/degree.repository";
import { LocalisationRepository } from "./repository/localisation.repository";
import { PeriodRepository } from "./repository/period.repository";
import { RoleRepository } from "./repository/role.repository";
import { TokenRepository } from "./repository/token.repository";
import { UserRepository } from "./repository/user.repository";
import { AdminService } from "./services/admin.service";
import { AuthService } from "./services/auth.service";
import { CandidateService } from "./services/candidate.service";
import { DegreeService } from "./services/degree.service";
import { LocalisationService } from "./services/localisation.service";
import { PeriodService } from "./services/period.service";
import { RoleService } from "./services/role.service";
import { TokenService } from "./services/token.service";
import { UserService } from "./services/user.service";

export const adminHandler = new AdminHandler(new AdminService(new AdminRepository()));
export const userHandler = new UserHandler(new UserService(new UserRepository()));
export const tokenHandler = new TokenHandler(new TokenService(new TokenRepository()));
export const roleHandler = new RoleHandler(new RoleService(new RoleRepository()));
export const periodHandler = new PeriodHandler(new PeriodService(new PeriodRepository()));
export const localisationHandler = new LocalisationHandler(new LocalisationService(new LocalisationRepository()));
export const degreeHandler = new DegreeHandler(new DegreeService(new DegreeRepository()));
export const authHandler = new AuthHandler(new AuthService(new AuthRepository()));
export const candidateHandler = new CandidateHandler(new CandidateService(new CandidateRepository(), new UserRepository()));