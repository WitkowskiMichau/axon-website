import type { NextApiRequest, NextApiResponse } from 'next';

export default async function uploadFile(req: NextApiRequest, res: NextApiResponse) {
    const file = (req as any).file; // Multer adds the file object to the request
    if (!file) {
        throw new Error('File not found');
    }

    // Simulate file processing logic
    return {
        message: 'File uploaded successfully',
        filename: file.originalname,
        path: file.path,
    };
}
