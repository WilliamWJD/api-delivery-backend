import { compare } from 'bcryptjs';

export default function Compare(password: string, payload: string): Promise<Boolean> {
    return compare(password, payload);
}