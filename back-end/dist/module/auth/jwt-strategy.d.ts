import { Strategy } from 'passport-jwt';
import { JWTPayload } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JWTPayload): Promise<{
        id: string;
        email: string;
        username: string;
    }>;
}
export {};
