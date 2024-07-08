/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VerificationService } from "../verification.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VerificationCreateInput } from "./VerificationCreateInput";
import { Verification } from "./Verification";
import { VerificationFindManyArgs } from "./VerificationFindManyArgs";
import { VerificationWhereUniqueInput } from "./VerificationWhereUniqueInput";
import { VerificationUpdateInput } from "./VerificationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VerificationControllerBase {
  constructor(
    protected readonly service: VerificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Verification })
  @nestAccessControl.UseRoles({
    resource: "Verification",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVerification(
    @common.Body() data: VerificationCreateInput
  ): Promise<Verification> {
    return await this.service.createVerification({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        token: true,
        expiresAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Verification] })
  @ApiNestedQuery(VerificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Verification",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async verifications(@common.Req() request: Request): Promise<Verification[]> {
    const args = plainToClass(VerificationFindManyArgs, request.query);
    return this.service.verifications({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        token: true,
        expiresAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Verification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Verification",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async verification(
    @common.Param() params: VerificationWhereUniqueInput
  ): Promise<Verification | null> {
    const result = await this.service.verification({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        token: true,
        expiresAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Verification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Verification",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVerification(
    @common.Param() params: VerificationWhereUniqueInput,
    @common.Body() data: VerificationUpdateInput
  ): Promise<Verification | null> {
    try {
      return await this.service.updateVerification({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          token: true,
          expiresAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Verification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Verification",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVerification(
    @common.Param() params: VerificationWhereUniqueInput
  ): Promise<Verification | null> {
    try {
      return await this.service.deleteVerification({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          token: true,
          expiresAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}