import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './model/user.model';

export const GetUser = createParamDecorator<string>(
  (data: string, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as User;
    return user;
  },
);