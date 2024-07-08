/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PasswordReset as PrismaPasswordReset } from "@prisma/client";

export class PasswordResetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PasswordResetCountArgs, "select">
  ): Promise<number> {
    return this.prisma.passwordReset.count(args);
  }

  async passwordResets(
    args: Prisma.PasswordResetFindManyArgs
  ): Promise<PrismaPasswordReset[]> {
    return this.prisma.passwordReset.findMany(args);
  }
  async passwordReset(
    args: Prisma.PasswordResetFindUniqueArgs
  ): Promise<PrismaPasswordReset | null> {
    return this.prisma.passwordReset.findUnique(args);
  }
  async createPasswordReset(
    args: Prisma.PasswordResetCreateArgs
  ): Promise<PrismaPasswordReset> {
    return this.prisma.passwordReset.create(args);
  }
  async updatePasswordReset(
    args: Prisma.PasswordResetUpdateArgs
  ): Promise<PrismaPasswordReset> {
    return this.prisma.passwordReset.update(args);
  }
  async deletePasswordReset(
    args: Prisma.PasswordResetDeleteArgs
  ): Promise<PrismaPasswordReset> {
    return this.prisma.passwordReset.delete(args);
  }
}