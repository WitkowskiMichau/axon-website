import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';

const upload = multer({ dest: 'uploads/' });

export function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    middleware: any
): Promise<void> {
    return new Promise((resolve, reject) => {
        middleware(req, res, (result: unknown) => {
            if (result instanceof Error) {
                return reject(result);
            }
            resolve();
        });
    });
}

export const multerMiddleware = upload.single('file');
