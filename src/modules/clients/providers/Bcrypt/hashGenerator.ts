import { hash } from 'bcryptjs';

export default function HashGenerator(payload: string): Promise<string> {
    return hash(payload, 8)
}